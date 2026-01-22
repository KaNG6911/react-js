export const Success = () => {
  return (
    <div className="flex flex-col w-120 h-45 p-9 bg-white rounded-2xl justify-center items-start text-4xl">
      <img className="w-17" src="Pinecone.svg" alt="" />
      <span className="text-[31px] font-bold">You're All Set! 🔥</span>
      <footer className="text-[19px] font-medium text-gray-400 pt-2">
        We've received your submission. Thank you!
      </footer>
    </div>
  );
};
