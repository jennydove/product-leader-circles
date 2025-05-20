
const CommunityRules = () => {
  const rules = [
    {
      title: "No Non-Product People",
      description: "Only senior product leaders to keep the conversations focused and relevant.",
    },
    {
      title: "No Vendors or Recruiters",
      description: "This is a space for real peer connections, not sales pitches.",
    },
    {
      title: "Confidentiality First",
      description: "What's said in the room stays in the room – no social media posts, no outside sharing.",
    },
    {
      title: "Be Present",
      description: "Engage fully, share openly, and contribute to the community's success.",
    }
  ];

  return (
    <section id="rules" className="section-padding relative bg-gradient-to-br from-cpo-charcoal via-cpo-light-charcoal to-cpo-charcoal text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="w-24 h-24 rounded-full bg-cpo-orange absolute top-10 left-10 blur-xl"></div>
          <div className="w-32 h-32 rounded-full bg-cpo-light-orange absolute bottom-10 right-10 blur-xl"></div>
          <div className="w-48 h-48 rounded-full bg-cpo-orange absolute top-1/2 left-1/3 blur-2xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center font-heading">
          Community Rules
        </h2>
        <p className="text-xl md:text-2xl font-normal mb-16 text-white/80 max-w-3xl mx-auto text-center">
          We protect our culture of trust and candor with clear expectations
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {rules.map((rule, index) => (
            <div 
              key={index}
              className="backdrop-blur-sm p-6 rounded-lg border-t border-l border-white/10 border-r border-b border-white/5 bg-gradient-to-br from-white/10 to-transparent shadow-xl hover:translate-y-[-4px] transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-white">
                  {rule.title}
                </h3>
                <div className="w-2 h-2 rounded-full bg-cpo-orange"></div>
              </div>
              <p className="text-white/80">
                {rule.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-2xl mx-auto text-center">
          <div className="relative p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
            <p className="text-lg text-white/90 italic">
              "The honesty and vulnerability I've experienced in this group is unprecedented. This is what professional communities should be."
            </p>
            <p className="mt-4 font-medium text-cpo-light-orange">- Michael R., Head of Product</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityRules;
