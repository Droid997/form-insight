type ShortTextProps = {
  required?: boolean;
  max_characters?: number;
};

export default function ShortText({
  required,
  max_characters,
}: ShortTextProps) {
  return (
    <div className="flex items-center justify-center w-full h-full p-20 flex-col">
      <input
        placeholder={"Hello What is Your Name ?"}
        className="w-full text-3xl border-none outline-none"
      />
      <input
      
        value={"Description (optional)"}
        className="w-full mt-2 text-slate-400 outline-none"
      />
     
      <input
        value={"Answer Here..."}
        className="w-full text-slate-400 border-b-2 mt-10 text-xl outline-none"
      />
    </div>
  );
}
