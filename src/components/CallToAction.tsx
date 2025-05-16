
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-cpo-charcoal to-cpo-light-charcoal text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Ready to Meet Your People?
        </h2>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10">
          Apply for an upcoming lunch or try the Back Room for free. It's time to connect with the leaders who get it.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button className="bg-cpo-orange hover:bg-cpo-light-orange text-white px-8 py-6 text-lg rounded-md font-medium transition-all">
            Apply Now
          </Button>
          <Button variant="outline" className="text-white border-white hover:bg-white/10 px-8 py-6 text-lg">
            Explore Membership
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
