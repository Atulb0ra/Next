
async function File({params}) {
    const {filepath} = await params;
  return (
    <div>
      <h1>File /{filepath?.join("/")}</h1>
    </div>
  )
}

export default File
