const TrustedBy = () => {
  const companies = [
    "Microsoft", "Google", "Amazon", "IBM", "Oracle", "Cisco"
  ];

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-muted-foreground text-lg font-medium mb-8">
            Empresas que confían en nosotros
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {companies.map((company, index) => (
              <div 
                key={index}
                className="flex items-center justify-center p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 group"
              >
                <span className="text-muted-foreground group-hover:text-primary transition-smooth font-semibold text-lg">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Más de 500 empresas confían en nuestras soluciones tecnológicas para mantener 
            sus operaciones funcionando sin interrupciones.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;