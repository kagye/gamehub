import cyberPunk from '../assets/cyber-punk.jpg';
import terraria from '../assets/terraria.jpg';
import tombRaider from '../assets/tomb-raider.jpg';
import dishonoured from '../assets/dishonored.jpg';
import beholder from '../assets/beholder.jpg';
import metro from '../assets/metro-2033.jpg';
import scribble from '../assets/scribblenauts.jpg';
import civilization from '../assets/civilization-vi.jpg';
import machinarium from '../assets/machinarium.jpg';
import riskOfRain from '../assets/risk-of-rain.jpg';
import crazyTaxi from '../assets/crazy-taxi.jpg';
import dirt from '../assets/dirt-showdown.jpg';
import blackDesert from '../assets/black-desert-online.jpg';
import golf from '../assets/golf-with-your-friends.jpg';
import tekken from '../assets/tekken-7.jpg';
import lego from '../assets/lego-batman.jpg';
import ticketToRide from '../assets/ticket-to-ride.jpg';
import clickTeam from '../assets/clickteam-fusion.jpg';
import shadowVerse from '../assets/shadow-verse.jpg';

export interface Genre {
  title: string;
  image: string;
}
export const getGenreList = (): Genre[] => {
  return [
    { title: 'Action', image: cyberPunk },
    { title: 'Indie', image: terraria },
    { title: 'Adventure', image: tombRaider },
    { title: 'RPG', image: dishonoured },
    { title: 'Strategy', image: beholder },
    { title: 'Shooter', image: metro },
    { title: 'Casual', image: scribble },
    { title: 'Simulation', image: civilization },
    { title: 'Puzzle', image: machinarium },
    { title: 'Arcade', image: riskOfRain },
    { title: 'Platformer', image: crazyTaxi },
    { title: 'Racing', image: dirt },
    { title: 'Massively Multiplayer', image: blackDesert },
    { title: 'Sport', image: golf },
    { title: 'Fighting', image: tekken },
    { title: 'Family', image: lego },
    { title: 'Board Games', image: ticketToRide },
    { title: 'Educational', image: clickTeam },
    { title: 'Card', image: shadowVerse },
  ];
};
