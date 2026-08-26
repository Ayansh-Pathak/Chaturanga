const fs = require('fs');
const file = 'src/components/clubs/ClubsAndTeamsHub.tsx';
let c = fs.readFileSync(file, 'utf8');

c = c.replace(
  'const { clubs, createClub, joinClub, updateClubIcon } = useClubs();',
  'const { clubs, createClub, joinClub, updateClubIcon, updateClubBanner } = useClubs();'
);

// We need an Edit Banner button
const oldBanner = `<div className="h-36 w-full relative">
                <img
                  src={selectedClub.banner}
                  alt={selectedClub.name}
                  className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1427] via-transparent to-transparent" />
              </div>`;

const newBanner = `<div className="h-36 w-full relative group">
                <img
                  src={selectedClub.banner}
                  alt={selectedClub.name}
                  className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1427] via-transparent to-transparent" />
                {isMember && (
                  <button
                    onClick={() => {
                      const url = prompt('Enter new banner URL:', selectedClub.banner);
                      if (url) updateClubBanner(selectedClub.id, url);
                    }}
                    className="absolute top-4 right-4 bg-black/60 p-2 rounded-xl text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm border border-slate-700 hover:bg-slate-800 text-xs flex items-center gap-2"
                  >
                    Edit Banner
                  </button>
                )}
              </div>`;
              
c = c.replace(oldBanner, newBanner);

// And edit profile picture logic
const oldIconRender = `<div 
                      className={\`w-16 h-16 rounded-2xl bg-[#10192e] border-2 border-blue-400/80 shadow-2xl flex items-center justify-center text-3xl \${isMember ? 'cursor-pointer hover:border-blue-300' : ''}\`}
                      onClick={() => isMember && setShowEditIconMenu(!showEditIconMenu)}
                      title={isMember ? 'Change profile picture' : ''}
                    >
                      {selectedClub.icon}
                    </div>`;

const newIconRender = `<div 
                      className={\`w-16 h-16 rounded-2xl bg-[#10192e] border-2 border-blue-400/80 shadow-2xl overflow-hidden flex items-center justify-center text-3xl \${isMember ? 'cursor-pointer hover:border-blue-300' : ''}\`}
                      onClick={() => isMember && setShowEditIconMenu(!showEditIconMenu)}
                      title={isMember ? 'Change profile picture' : ''}
                    >
                      {selectedClub.icon.startsWith('http') ? (
                        <img src={selectedClub.icon} alt="Club Profile" className="w-full h-full object-cover" />
                      ) : (
                        selectedClub.icon
                      )}
                    </div>`;
                    
c = c.replace(oldIconRender, newIconRender);

// Custom URL option in the edit icon menu
const oldIconMenu = `<div className="absolute top-16 left-0 mt-2 bg-slate-900 border border-slate-700 rounded-xl p-2 shadow-xl z-50 flex gap-2">
                        {iconOptions.map((icon) => (
                          <button
                            key={icon}
                            onClick={() => {
                              updateClubIcon(selectedClub.id, icon);
                              setShowEditIconMenu(false);
                            }}
                            className="w-10 h-10 flex items-center justify-center text-xl hover:bg-slate-800 rounded-lg transition-colors"
                          >
                            {icon}
                          </button>
                        ))}
                      </div>`;

const newIconMenu = `<div className="absolute top-16 left-0 mt-2 bg-slate-900 border border-slate-700 rounded-xl p-2 shadow-xl z-50 flex gap-2">
                        {iconOptions.map((icon) => (
                          <button
                            key={icon}
                            onClick={() => {
                              updateClubIcon(selectedClub.id, icon);
                              setShowEditIconMenu(false);
                            }}
                            className="w-10 h-10 flex items-center justify-center text-xl hover:bg-slate-800 rounded-lg transition-colors"
                          >
                            {icon}
                          </button>
                        ))}
                        <button
                            onClick={() => {
                              const url = prompt('Enter custom profile picture URL:');
                              if (url) updateClubIcon(selectedClub.id, url);
                              setShowEditIconMenu(false);
                            }}
                            className="px-3 text-xs bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors whitespace-nowrap"
                          >
                            Custom URL
                          </button>
                      </div>`;
                      
c = c.replace(oldIconMenu, newIconMenu);

// Fix club list rendering as well
const oldListIcon = `<div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 transition-transform">
                      {club.icon}
                    </div>`;

const newListIcon = `<div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 transition-transform overflow-hidden">
                      {club.icon.startsWith('http') ? (
                        <img src={club.icon} alt="Club" className="w-full h-full object-cover" />
                      ) : (
                        club.icon
                      )}
                    </div>`;

c = c.replace(oldListIcon, newListIcon);

fs.writeFileSync(file, c);
console.log('Patched ClubsAndTeamsHub.tsx');
