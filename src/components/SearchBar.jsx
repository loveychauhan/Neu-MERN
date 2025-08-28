export default function SearchBar() {
  return (
    <div className={`max-w-[480px] w-full ml-auto border-[1px] rounded-[4px]`}>
      <form action="">
        <input
          className="outline-0 p-2"
          type="text"
          placeholder="Search Here"
        />
      </form>
    </div>
  );
}
