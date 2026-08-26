const fs = require('fs');

const targetFile = 'src/context/TournamentContext.tsx';
let content = fs.readFileSync(targetFile, 'utf8');

const botsSection = `    // Seed with realistic participants
    const botParticipants: TournamentParticipant[] = [`;

const addClubMemberFetching = `    let clubMemberIds: string[] = [];
    if (isClubOnly && clubId) {
      try {
        const savedClubs = localStorage.getItem('chaturanga_clubs');
        if (savedClubs) {
          const parsedClubs = JSON.parse(savedClubs);
          const club = parsedClubs.find((c: any) => c.id === clubId);
          if (club && club.members) {
            clubMemberIds = club.members.map((m: any) => m.userId);
          }
        }
      } catch (e) {
        console.error('Could not fetch club members for tournament', e);
      }
    }

    // Seed with realistic participants
    const botParticipants: TournamentParticipant[] = [`;

content = content.replace(botsSection, addClubMemberFetching);

const oldParticipantList = `participants: [hostParticipant, ...botParticipants.slice(0, format === 'knockout' ? 7 : (isClubOnly ? 3 : 7))],`;
const newParticipantList = `participants: [
        hostParticipant,
        ...botParticipants
          .filter(bot => !isClubOnly || clubMemberIds.includes(bot.id))
          .slice(0, format === 'knockout' ? 7 : 7)
      ],`;

content = content.replace(oldParticipantList, newParticipantList);

fs.writeFileSync(targetFile, content, 'utf8');
console.log('Patched ' + targetFile);
