export type TimeControl = '1+0' | '2+1' | '3+0' | '3+2' | '5+0' | '5+3' | '10+0' | '15+10' | '30+0' | 'custom' | string;

export interface DirectMessage {
  id: string;
  senderId: string;
  senderName: string;
  senderAvatar: string;
  senderFlag: string;
  recipientId: string;
  recipientName: string;
  content: string;
  timestamp: string;
  read: boolean;
}

export interface ChatUser {
  id: string;
  username: string;
  avatar: string;
  countryFlag: string;
  rating: number;
  status: 'online' | 'in_game' | 'offline';
  lastSeen?: string;
}

export type TournamentFormat = 
  | 'swiss' 
  | 'arena' 
  | 'round_robin' 
  | 'double_round_robin' 
  | 'knockout';

export type MedalTier = 'gold' | 'silver' | 'bronze' | 'brass';

export type RatingMilestoneType = 'bronze_50' | 'silver_75' | 'gold_100';

export interface TournamentMedalData {
  id: string;
  tournamentId: string;
  tournamentName: string;
  format: TournamentFormat;
  tier: MedalTier; // gold (1st), silver (2nd), bronze (3rd), brass (4th)
  placement: 1 | 2 | 3 | 4;
  dateTimeStr: string; // e.g. "Aug 25, 2026 • 14:30"
  awardedTo: string;
  awardedAt: string;
}

export interface RatingMilestoneMedalData {
  id: string;
  ratingAchieved: number;
  category: 'rapid' | 'blitz' | 'bullet' | 'puzzle';
  tier: 'gold' | 'silver' | 'bronze'; // Gold: 100 elo gained, Silver: 75 elo gained, Bronze: 50 elo gained
  message: string; // "Congratulations for achieving {rating} rating!"
  awardedAt: string;
}

export interface UserStats {
  rapid: number;
  blitz: number;
  bullet: number;
  puzzle: number;
  gamesPlayed: number;
  wins: number;
  losses: number;
  draws: number;
  currentStreak: number;
  bestStreak: number;
  puzzlesSolved: number;
  puzzleStreak: number;
  bestPuzzleStreak: number;
}

export interface GameRecord {
  id: string;
  white: { id: string; name: string; rating: number; avatar: string };
  black: { id: string; name: string; rating: number; avatar: string };
  result: '1-0' | '0-1' | '1/2-1/2' | '*';
  reason: string; // 'Checkmate' | 'Resignation' | 'Timeout' | 'Stalemate' | 'Draw by repetition' | '50-move rule'
  timeControl: TimeControl;
  pgn: string;
  movesCount: number;
  date: string;
  ratingChange?: number;
  mode: 'rated' | 'casual' | 'tournament' | 'bot';
  tournamentName?: string;
}

export interface UserProfile {
  id: string;
  username: string;
  email: string;
  avatar: string;
  country?: string;
  countryFlag?: string;
  title?: string;
  bio?: string;
  joinedDate: string;
  stats: UserStats;
  ratingHistory: { date: string; rapid: number; blitz: number; bullet: number; puzzle: number }[];
  tournamentMedals: TournamentMedalData[];
  ratingMedals: RatingMilestoneMedalData[];
  clubsJoined: string[];
  teamsJoined: string[];
  previousEmail?: string;
}

export interface PuzzleData {
  id: number;
  fen: string;
  solution: string[]; // UCI or SAN move list
  rating: number;
  themes: string[];
  title: string;
  description: string;
  toMove: 'w' | 'b';
}

export interface TournamentParticipant {
  id: string;
  username: string;
  avatar: string;
  rating: number;
  score: number;
  wins: number;
  draws: number;
  losses: number;
  streak: number; // for arena
  tiebreakBuchholz?: number;
  tiebreakSonneborn?: number;
  isBot?: boolean;
  botDifficulty?: number;
  withdrawn?: boolean;
}

export interface TournamentRoundMatch {
  id: string;
  roundNumber: number;
  whitePlayer: TournamentParticipant;
  blackPlayer: TournamentParticipant;
  result?: '1-0' | '0-1' | '1/2-1/2';
  pgn?: string;
  completed: boolean;
}

export interface Tournament {
  id: string;
  name: string;
  format: TournamentFormat;
  timeControl: TimeControl;
  totalRounds: number;
  currentRound: number;
  status: 'upcoming' | 'ongoing' | 'completed';
  createdAt: string;
  scheduledTime: string; // "Aug 25, 2026 • 15:00"
  hostId: string;
  hostName: string;
  isClubOnly?: boolean;
  clubId?: string;
  clubName?: string;
  participants: TournamentParticipant[];
  matches: TournamentRoundMatch[];
  winners?: {
    gold: TournamentParticipant;
    silver: TournamentParticipant;
    bronze: TournamentParticipant;
    brass: TournamentParticipant;
  };
}

export interface ClubMember {
  userId: string;
  username: string;
  avatar: string;
  rating: number;
  role: 'owner' | 'admin' | 'member';
  joinedAt: string;
}

export interface ClubMessage {
  id: string;
  authorId: string;
  authorName: string;
  authorAvatar: string;
  content: string;
  createdAt: string;
}

export interface Club {
  id: string;
  name: string;
  tag: string; // e.g. "VAJRA"
  description: string;
  banner: string;
  icon: string;
  isTeam: boolean; // false for Club, true for Team
  ownerId: string;
  ownerName: string;
  createdAt: string;
  members: ClubMember[];
  messages: ClubMessage[];
  totalWins: number;
  totalTournaments: number;
  isPrivate?: boolean;
  password?: string;
}

export interface FeedbackComment {
  id: string;
  authorId: string;
  authorName: string;
  authorAvatar: string;
  text: string;
  createdAt: string;
}

export interface FeedbackPost {
  id: string;
  authorId: string;
  authorName: string;
  authorAvatar: string;
  category: 'Features' | 'Tournaments' | 'Bug Report' | 'Chess Rules' | 'General';
  title: string;
  content: string;
  votes: number;
  upvotedBy: string[];
  comments: FeedbackComment[];
  createdAt: string;
  status: 'Under Review' | 'Planned' | 'In Progress' | 'Implemented';
}
