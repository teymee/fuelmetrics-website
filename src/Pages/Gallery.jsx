// ASSETS
import "@/components/Gallery/gallery.css";


// COMPONENTS
import Banner from "@/components/Gallery/Banner";
import Masterlayout from "@/components/Masterlayout";
import Events from "@/components/Gallery/Events";
import PhotoGallery from "@/components/Gallery/PhotoGallery";

export default function Gallery() {

  return (
    <section>
      <Masterlayout>
        <section className="top-margin">
          <Banner />

          <section className="bg-blue-200 py-20 ">
            <Events />
            <PhotoGallery/>
          </section>
        </section>
      </Masterlayout>
    </section>
  );
}
