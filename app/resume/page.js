export const metadata = {
    title: "Samer Sawan | Resume",
    description: "Samer Sawan's Resume",
    author: "Samer Sawan",
    keywords: "Samer, Sawan, Samer Sawan",
  }

const page = () => {
    return (
        <iframe className="w-screen h-screen" src='/resume.pdf' />
    )
}

export default page