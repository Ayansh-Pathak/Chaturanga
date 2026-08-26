const fs = require('fs');
const file = 'src/context/ClubContext.tsx';
let c = fs.readFileSync(file, 'utf8');

c = c.replace(
  'updateClubIcon: (clubId: string, icon: string) => void;',
  'updateClubIcon: (clubId: string, icon: string) => void;\n  updateClubBanner: (clubId: string, banner: string) => void;'
);

c = c.replace(
  'const updateClubIcon = (clubId: string, icon: string) => {',
  `const updateClubBanner = (clubId: string, banner: string) => {
    setClubs((prev) =>
      prev.map((c) => {
        if (c.id === clubId) {
          return { ...c, banner };
        }
        return c;
      })
    );
  };

  const updateClubIcon = (clubId: string, icon: string) => {`
);

c = c.replace(
  'updateClubIcon,',
  'updateClubIcon,\n        updateClubBanner,'
);

fs.writeFileSync(file, c);
console.log('Patched ClubContext.tsx');
