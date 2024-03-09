import Workspace from "../lib/components/workspace";

export default function Page() {   
    return (
        <section className="mx-5 mt-2 mb-10 px-3 py-2 bg-white/15 rounded-md h-[90dvh]">
            <h1 className="text-3xl font-bold text-white">Editor</h1>
            <Workspace />
        </section>
    );
}