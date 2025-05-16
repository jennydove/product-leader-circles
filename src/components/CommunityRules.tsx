
import { Check, X } from "lucide-react";

const CommunityRules = () => {
  const rules = [
    {
      title: "No Non-Product People",
      description: "Only senior product leaders to keep the conversations focused and relevant.",
      icon: <Check className="h-6 w-6 text-green-600" />,
    },
    {
      title: "No Vendors or Recruiters",
      description: "This is a space for real peer connections, not sales pitches.",
      icon: <X className="h-6 w-6 text-red-600" />,
    },
    {
      title: "Confidentiality First",
      description: "What's said in the room stays in the room – no social media posts, no outside sharing.",
      icon: <Check className="h-6 w-6 text-green-600" />,
    },
    {
      title: "Be Present",
      description: "Engage fully, share openly, and contribute to the community's success.",
      icon: <Check className="h-6 w-6 text-green-600" />,
    }
  ];

  return (
    <section id="rules" className="section-padding bg-cpo-charcoal text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center">
          Community Rules
        </h2>
        <p className="text-xl md:text-2xl font-normal mb-16 text-white/80 max-w-3xl mx-auto text-center">
          We protect our culture of trust and candor with clear expectations
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {rules.map((rule, index) => (
            <div 
              key={index}
              className="bg-cpo-light-charcoal/80 backdrop-blur-sm p-6 rounded-lg border-l-4 border-cpo-orange transition-all hover:bg-cpo-light-charcoal"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-white">
                  {rule.title}
                </h3>
                <div className="bg-white/10 p-2 rounded-full">
                  {rule.icon}
                </div>
              </div>
              <p className="text-white/80">
                {rule.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-2xl mx-auto text-center">
          <p className="text-lg text-white/80 italic">
            "The honesty and vulnerability I've experienced in this group is unprecedented. This is what professional communities should be."
          </p>
          <p className="mt-4 font-medium text-cpo-light-orange">- Michael R., Head of Product</p>
        </div>
      </div>
    </section>
  );
};

export default CommunityRules;
