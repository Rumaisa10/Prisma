import AddPin from "./_components/add-pin";
import ArrangePin from "./_components/arrange-pin";
import PinList from "./_components/pin-list";

export default function Home() {
  return (
    <section className="m-2">
      <div>
        <ArrangePin></ArrangePin>
        <AddPin></AddPin>
      </div>
      <PinList></PinList>
    </section>
  );
}
