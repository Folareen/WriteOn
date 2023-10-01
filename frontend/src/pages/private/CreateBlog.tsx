import { useState } from "react"
import Container from "../../components/Container"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { FaEdit } from 'react-icons/fa'
import blogCategories from "../../constants/blogCategories";
import { createBlog } from "../../services/blog";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../stores/useAuthStore";
import { toast } from "react-toastify";

const CreateBlog = () => {
    const [title, setTitle] = useState('')
    const [coverImage, setCoverImage] = useState<any>(null)
    const [category, setCategory] = useState('other')
    const [content, setContent] = useState('')
    const [editorContent, setEditorContent] = useState('')
    const [showEditor, setShowEditor] = useState(false)

    const [savingAsDraft, setSavingAsDraft] = useState(false)
    const [publishing, setPublishing] = useState(false)

    const navigate = useNavigate()
    const { user } = useAuthStore()

    const handleSubmit = async (published: boolean) => {
        try {
            if (published) {
                setPublishing(true)
            } else {
                setSavingAsDraft(true)
            }
            const newBlog = await createBlog({ title, content, category, published, coverImage })
            navigate(`/${user.username}/${newBlog.id}`)
        } catch (error: any) {
            toast.error(error?.message || error)
        } finally {
            setPublishing(false)
            setSavingAsDraft(false)
        }
    }

    return (<Container className="text-[#1E1E21] py-4 lg:py-6">

        <div className="mb-4 lg:mb-6 max-w-3xl">
            <label className="mb-1 lg:mb-3 block text-[14px] lg:text-xl font-medium" htmlFor="title">
                Blog Title
            </label>
            <input type="text" value={title} onChange={(e) => {
                setTitle(e.target.value)
            }} id="title" className="px-3 lg:px-5 py-2.5 lg:py-4 rounded-[10px] border-[rgba(30,30,33,0.8)] focus:outline-none focus:border-[rgba(30,30,33,1)] border-solid border-[1px] w-full" />
        </div>

        <div className="mb-4 lg:mb-6 max-w-3xl">
            <label className="mb-1 lg:mb-3 block text-[14px] lg:text-xl font-medium" htmlFor="cover-image">
                Blog Cover Image
            </label>
            <input type="file" onChange={(e) => {
                setCoverImage(e.target.files && e.target.files[0])
            }} id="cover-image" className="px-3 lg:px-5 py-2.5 lg:py-4 rounded-[10px] border-[rgba(30,30,33,0.8)] focus:outline-none focus:border-[rgba(30,30,33,1)] border-solid border-[1px] w-full" />
        </div>


        <div className="mb-4 lg:mb-6 max-w-3xl">
            <label className="mb-1 lg:mb-3 block text-[14px] lg:text-xl font-medium" htmlFor="category">
                Blog Category
            </label>
            <select value={category} onChange={(e) => {
                setCategory(e.target.value)
            }} id="title" className="px-3 lg:px-5 py-2.5 lg:py-4 rounded-[10px] border-[rgba(30,30,33,0.8)] focus:outline-none focus:border-[rgba(30,30,33,1)] border-solid border-[1px] w-full capitalize
            " >
                {
                    blogCategories.map((cgy) => (
                        <option key={cgy}>
                            {cgy}
                        </option>
                    ))
                }
            </select>
        </div>



        <div className="mb-4 lg:mb-6 ">
            <p className="mb-1 lg:mb-3 block text-[14px] lg:text-xl font-medium">
                Blog Content
            </p>

            <div className="h-max relative">
                <button className="bg-[#9333EA] text-white hover:shadow-sm text-[14px] lg:text-lg rounded-md py-1 md:py-1 lg:py-2 px-1.5 lg:px-4 absolute top-0.5 right-0.5 space-x-1 flex justify-center items-center" onClick={() => {
                    setShowEditor(true)
                    setEditorContent(content)
                }}>
                    <FaEdit />
                    <span>
                        Edit
                    </span>
                </button>
                <div className="px-3 lg:px-5 py-2.5 lg:py-4 rounded-[10px] border-[rgba(30,30,33,0.8)] focus:outline-none focus:border-[rgba(30,30,33,1)] border-solid border-[1px] w-full  h-max min-h-[20vh] max-h-screen overflow-y-auto" >
                    <div dangerouslySetInnerHTML={{ __html: content }} >

                    </div>
                </div>
            </div>

        </div>

        {
            showEditor &&
            <div
                className="h-screen w-screen fixed top-0 z-50 bg-white right-0"
            >
                <ReactQuill
                    className="h-[75vh] sm:h-[80vh] sm md:h-[85vh] flex-1 w-screen absolute top-0 right-0 left-0 bottom-0"
                    value={editorContent}
                    onChange={(value) => setEditorContent(value)}
                    placeholder={"Write something awesome..."}
                    modules={{
                        toolbar: [
                            [{
                                font: []
                            }],
                            [{ header: [1, 2, 3, 4, 5, false] }],
                            ["bold", "italic", "underline", "strike"],
                            [{ color: [] }, { background: [] }],
                            [{ script: "sub" }, { script: "super" }],
                            ["blockquote", "code-block"],
                            [{ list: "ordered" }, { list: "bullet" }],
                            [{ indent: "-1" }, { indent: "+1" }, { align: ["right", "center", "justify"] }],
                            ["link", "image", "video"],
                            ["clean"],
                        ],
                    }}
                />

                <div className="absolute bottom-2 md:bottom-3 right-1/2 translate-x-1/2 space-x-2">
                    <button className="bg-green-500 text-[14px] lg:text-lg text-white rounded-md py-1 md:py-2.5 lg:py-3 px-5 lg:px-10 hover:bg-green-600" onClick={() => {
                        setShowEditor(false)
                        setContent(editorContent)
                    }}>
                        Save
                    </button>
                    <button className="bg-red-500 text-[14px] lg:text-lg text-white rounded-md py-1 md:py-2.5 lg:py-3 px-5 lg:px-10 hover:bg-red-600" onClick={() => {
                        setShowEditor(false)
                    }}>
                        Cancel
                    </button>
                </div>

            </div>
        }


        <div className="flex justify-center items-center gap-1.5  lg:gap-3 mt-6 lg:mt-8 flex-wrap">
            <button className="bg-green-400 text-[14px] lg:text-lg text-white rounded-md py-1.5 md:py-2.5 lg:py-3 px-5 lg:px-10 hover:shadow-md disabled:bg-gray-400" disabled={savingAsDraft || publishing} onClick={() => {
                handleSubmit(false)
            }}>
                {
                    savingAsDraft ?
                        'Saving as draft...' :
                        'Save As Draft'
                }
            </button>
            <button className="bg-green-600 text-[14px] lg:text-lg text-white rounded-md py-1.5 md:py-2.5 lg:py-3 px-5 lg:px-10 hover:shadow-md disabled:bg-gray-400" disabled={savingAsDraft || publishing} onClick={() => {
                handleSubmit(true)
            }}>
                {
                    publishing ?
                        'Publishing blog...' :
                        'Publish Blog'
                }
            </button>
        </div>

    </Container >
    )
}

export default CreateBlog