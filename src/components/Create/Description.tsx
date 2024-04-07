import PadAsset from "@/assets/PadAsset";
import { useCallback, useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";


interface DescProps {
    value: string
    onChange: any
    textRef: any
    description: string
}

interface selectionType {
    start: number,
    end: number,
    syntaxLength: number
}

const Tab = [
    'Write',
    'Preview'
]

const Description = ({
    value,
    onChange,
    textRef,
    description
}: DescProps) => {
    const [open, setOpen] = useState<number>(0)
    const [selection, setSelection] = useState<selectionType>({
        start: 0,
        end: 0,
        syntaxLength: 0
    })


    const handleEditSelection = useCallback((syntax: string) => {
        const start = textRef.current?.selectionStart;
        const end = textRef.current?.selectionEnd;


        setSelection({
            start,
            end,
            syntaxLength: syntax.length
        })

        if(value === (syntax + syntax)) {
            onChange('')
        } else if (syntax == '### ') {
            const _markdown = syntax + (value === undefined ? "" : value)

            onChange(_markdown)

        } else if(syntax == '[](url)') {
            const _markdown = value + syntax
            onChange(_markdown)
            setSelection({
                start: value.length + 1,
                end: value.length + 1,
                syntaxLength: 0
            })
        } else {
            const _markdown =
            value.slice(0, start) +
            syntax +
            value.slice(start, end) +
            syntax +
            value.slice(end)

            onChange(_markdown)
        }

    }, [value, onChange, textRef])


    useEffect(() => {
        const handleKeyShortcut = (event: any) => {
            if(event.ctrlKey && event.key === 'b') {
                event.preventDefault()
                handleEditSelection('**')
            } else if(event.ctrlKey && event.key === 'i') {
                event.preventDefault()
                handleEditSelection('*')
            }
        }

        document.addEventListener('keydown', handleKeyShortcut)

        if(Number(selection.start) == 0 && Number(selection.end) == 0) {
            const currentPosition = selection.start + selection.syntaxLength

            if(Number(currentPosition) !== 0) {
                textRef.current.focus()
                textRef.current.setSelectionRange(currentPosition, currentPosition)

                setSelection({
                    start: 0,
                    end: 0,
                    syntaxLength: 0
                })
            }
        } else {
            const start = selection.start + selection.syntaxLength
            const end = selection.end + selection.syntaxLength

            textRef.current.focus()
            textRef.current.setSelectionRange(start, end)

            setSelection({
                start: 0,
                end: 0,
                syntaxLength: 0
            })
        }

        return () => {
            document.removeEventListener('keydown', handleKeyShortcut)
        }
    }, [handleEditSelection, textRef, selection])

    return (
        <div className="p-[2px] rounded-3xl focus-within:bg-gradient-to-r from-b-pink via-b-blue to-b-purple">
            <div className="relative bg-hero rounded-3xl px-5 shadow-2xl">
                <textarea
                rows={12}
                value={(value === '' || value === undefined) ? description : value}
                onChange={(e) => onChange(e.target.value)}
                className="border-0 outline-none bg-hero w-full placeholder:text-neutral-500 pt-14 pb-4 rounded-3xl autofill:bg-hero"
                placeholder="Enter a detailed description or overview of your project work"
                ref={textRef}
                />
                <div className="absolute top-0 inset-x-0 flex justify-between bg-black-2 w-full h-12 px-5 rounded-t-3xl">
                    <div className="flex divide-x divide-gray-400 cursor-pointer">
                        {Tab.map((item, index) => (
                            <div
                            key={index}
                            className={`text-gray-400 font-semibold my-auto px-5 ${(open == index) && "text-neutral-300"}`}
                            onClick={() => setOpen(index)}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                    {open === 0 && (
                        <div className="flex gap-5 my-auto">
                            <button
                            type="button"
                            className="border px-[4px] border-transparent hover:border-gray-400 rounded-lg"
                            onClick={() => handleEditSelection('### ')}>
                                {PadAsset().heading()}
                            </button>
                            <button
                            type="button"
                            className="border px-[6px] border-transparent hover:border-gray-400 rounded-lg"
                            onClick={() => handleEditSelection('**')}>
                                {PadAsset().bold()}
                            </button>
                            <button
                            type="button"
                            className="border border-transparent hover:border-gray-400 rounded-lg"
                            onClick={() => handleEditSelection('*')}>
                                {PadAsset().italic()}
                            </button>
                            <button
                            type="button"
                            className="border px-[5px] border-transparent hover:border-gray-400 rounded-lg"
                            onClick={() => handleEditSelection('[](url)')}>
                                {PadAsset().link()}
                            </button>
                        </div>
                    )}
                </div>
                {open === 1 && (
                    <Markdown
                    rehypePlugins={[remarkGfm]}
                    className="absolute top-12 left-0 prose-lg prose-invert w-full h-[calc(100%-48px)] rounded-b-3xl bg-black-2 py-2 px-5 text-neutral-200 text-wrap break-words *:m-0"
                    >
                        {value}
                    </Markdown>
                )}
            </div>
        </div>
    );
}

export default Description;