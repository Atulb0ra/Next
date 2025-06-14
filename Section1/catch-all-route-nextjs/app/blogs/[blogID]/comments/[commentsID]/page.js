export default async function Comment({ params }) {
    const paramsObj = await params;
    const { blogID, commentsID } = paramsObj;
    console.log(paramsObj);
    return (
      <div>
        Comment No. <i>{commentsID}</i> on <b>{blogID}</b> page
      </div>
    );
  }