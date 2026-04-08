// Premium UAE business images - High quality, vibrant, eye-catching
export const images = {
  // Hero/Homepage images - Stunning Dubai visuals
  hero: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=90', // Dubai skyline at sunset - vibrant
  dubaiNight: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1920&q=90', // Dubai at night - stunning lights
  burjKhalifa: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=1920&q=90', // Burj Khalifa - iconic
  dubaiMarina: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=90', // Dubai Marina - luxury
  
  // Service-specific images - Premium business photography
  companySetup: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1200&q=85', // Modern office meeting
  visaImmigration: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=85', // Travel/passport concept
  laborCompliance: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=85', // Professional workspace
  documentServices: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1200&q=85', // Documents and signing
  hrServices: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=85', // Team collaboration
  businessConsulting: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=85', // Business strategy meeting
  
  // Background patterns - Vibrant and modern
  abstractGradient: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&q=85', // Colorful gradient
  modernOffice: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&q=85', // Sleek modern office
  
  // Professional business imagery - Eye-catching
  success: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=85', // Success celebration
  teamwork: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=85', // Dynamic teamwork
  
  // UAE / Middle East premium
  uaeArchitecture: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=1200&q=85', // Modern UAE architecture
  businessHandshake: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=85', // Professional handshake - bright
  
  // Additional premium images - Vibrant and engaging
  luxuryOffice: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85', // Luxury office space
  businessProfessionals: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=85', // Confident professionals
  dubaiCityscape: 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=1920&q=90', // Dubai cityscape - vibrant
  modernDubai: 'https://images.unsplash.com/photo-1580837119756-563d608dd119?w=1920&q=90', // Modern Dubai architecture
  
  // PRO Services specific images
  documentProcessing: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=85', // Document processing
  businessMeeting: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=85', // Professional business meeting
  officeTeam: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=85', // Office team working
  legalDocuments: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=85', // Legal documents and contracts
  businessGrowth: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=85', // Business growth analytics
  
  // Aliases for backward compatibility
  officeSpace: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&q=85', // Modern office
  saudiArchitecture: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=1200&q=85', // UAE architecture
  dubaiCity: 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=1920&q=90', // Dubai city
  
  // Eye-catching feature images
  innovation: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=85', // Innovation/technology
  growth: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=85', // Business growth charts
  partnership: 'https://images.unsplash.com/photo-1556761223-4c4282c73f77?w=1200&q=85', // Partnership concept
};

// Image with overlay component helper - Updated for teal/gold theme
export const getImageWithOverlay = (imageUrl: string, opacity: number = 0.5) => ({
  backgroundImage: `linear-gradient(rgba(20, 184, 166, ${opacity}), rgba(13, 148, 136, ${opacity})), url(${imageUrl})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
});
