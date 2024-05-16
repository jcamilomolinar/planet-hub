import Image from 'next/image';
import profilePic from '../../public/profile_pic.png'

function QueryComment({ username, comment }: { username: string, comment: string }) {
  return (
    <article className="p-2 text-sm">
      <footer className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <p className="inline-flex items-center text-sm text-gray-900 font-semibold">
            <Image
              className="mr-1 w-7 h-7"
              src={profilePic}
              alt="User photo" />{username}</p>
        </div>
      </footer>
      <p className="text-black">{comment}</p>
    </article>
  );
}

export default QueryComment;