const fs = require('fs');
const path = require('path');

const JSON_PATH = path.join(__dirname, 'hunter_profiles.json');

const ROSTER = [
  { key: 'ranchhand38', name: 'Ranchhand38', age: '38', height: '6\'2"', role: 'Top', vibe: 'kink', bio: 'Work hard, play harder. You won\'t walk right after.', distance: '14 mi', online: true, lastActive: 'Online now' },
  { key: 'kodakjpg', name: 'Kodakjpg', age: '23', height: '5\'11"', role: 'Vers', vibe: 'collab', bio: 'I shoot everything. Come find out what that means.', distance: '5 mi', online: false, lastActive: 'Active recently' },
  { key: 'nomad31', name: 'Nomad31', age: '31', height: '6\'0"', role: 'Side', vibe: 'anon', bio: 'No names. No story. Just show up.', distance: '13 mi', online: false, lastActive: 'Active 2 hours ago' },
  { key: 'fletch26', name: 'Fletch26', age: '26', height: '6\'0"', role: 'Bottom', vibe: 'kink', bio: 'I follow instructions well. Prove you can give them.', distance: '8 mi', online: true, lastActive: 'Online now' },
  { key: 'whitty', name: 'Whitty', age: '21', height: '5\'10"', role: 'Vers', vibe: 'romance', bio: 'Pretty things deserve attention. Give me yours.', distance: '3 mi', online: false, lastActive: 'Active recently' },
  { key: 'patchsf', name: 'Patchsf', age: '35', height: '5\'11"', role: 'Top', vibe: 'whatevers', bio: 'Not complicated. Just consistent. Come find out what that means.', distance: '8 mi', online: true, lastActive: 'Online now' },
  { key: 'colt24', name: 'Colt24', age: '24', height: '6\'2"', role: 'Bottom', vibe: 'whatevers', bio: 'Fast and easy to break in. Try me.', distance: '10 mi', online: false, lastActive: 'Active 3 hours ago' },
  { key: 'wrenlate', name: 'Wrenlate', age: '29', height: '5\'9"', role: 'Side', vibe: 'romance', bio: 'Not looking for a hookup. Looking for a reason to stay up late.', distance: '7 mi', online: false, lastActive: 'Active 5 hours ago' },
  { key: 'suttertop', name: 'Suttertop', age: '41', height: '6\'0"', role: 'Top', vibe: 'anon', bio: 'I don\'t need to know your name. You don\'t need to know mine.', distance: '15 mi', online: true, lastActive: 'Online now' },
  { key: 'birch33', name: 'Birch33', age: '33', height: '6\'1"', role: 'Vers', vibe: 'whatevers', bio: 'Low drama, high standards. Figure out which one you are.', distance: '4 mi', online: false, lastActive: 'Active recently' },
  { key: 'poetrybottom', name: 'Poetrybottom', age: '27', height: '5\'10"', role: 'Bottom', vibe: 'romance', bio: 'I\'ll remember you after. Make it worth it.', distance: '6 mi', online: true, lastActive: 'Online now' },
  { key: 'rookla', name: 'Rookla', age: '30', height: '6\'1"', role: 'Top', vibe: 'anon', bio: 'Strategic. Precise. In and out before you know what happened.', distance: '6 mi', online: false, lastActive: 'Active 1 hour ago' },
  { key: 'banjo', name: 'Banj0', age: '36', height: '5\'11"', role: 'Vers', vibe: 'whatevers', bio: 'Easy going until the door closes. Then not so much.', distance: '7 mi', online: false, lastActive: 'Active recently' },
  { key: 'frostyla', name: 'Frostyla', age: '22', height: '5\'9"', role: 'Bottom', vibe: 'kink', bio: 'Cold outside. Completely different story in here.', distance: '7 mi', online: true, lastActive: 'Online now' },
  { key: 'timber39', name: 'Timber39', age: '39', height: '6\'2"', role: 'Top', vibe: 'whatevers', bio: 'Solid. Reliable. Heavy when it counts.', distance: '17 mi', online: true, lastActive: 'Online now' },
  { key: 'luca33', name: 'Luca33', age: '28', height: '6\'0"', role: 'Vers', vibe: 'collab', bio: 'I make things. Come see what we can make together.', distance: '7 mi', online: true, lastActive: 'Online now' },
  { key: 'passingthru', name: 'Passingthru', age: '25', height: '5\'8"', role: 'Side', vibe: 'anon', bio: 'Here and gone. That\'s kind of the appeal.', distance: '19 mi', online: false, lastActive: 'Active recently' },
  { key: 'keller43', name: 'Keller43', age: '43', height: '6\'0"', role: 'Top', vibe: 'romance', bio: 'Old enough to know what I want. Still want it badly enough to show up.', distance: '12 mi', online: false, lastActive: 'Active recently' },
  { key: 'pikefit', name: 'Pikefit', age: '32', height: '6\'2"', role: 'Bottom', vibe: 'whatevers', bio: 'Built for it. Just waiting on the right person to figure that out.', distance: '7 mi', online: false, lastActive: 'Active 2 hours ago' },
  { key: 'finn20', name: 'Finn20', age: '20', height: '5\'10"', role: 'Bottom', vibe: 'romance', bio: 'First time for everything. Make it count.', distance: '6 mi', online: true, lastActive: 'Online now' },
  { key: 'notatop34', name: 'Notatop34', age: '34', height: '5\'11"', role: 'Side', vibe: 'whatevers', bio: 'Not a top, not a bottom. Still worth your time.', distance: '7 mi', online: true, lastActive: 'Online now' },
  { key: 'notrace27', name: 'Notrace27', age: '27', height: '6\'0"', role: 'Vers', vibe: 'anon', bio: 'No trace. No evidence. Just the memory.', distance: '4 mi', online: false, lastActive: 'Active 2 hours ago' },
  { key: 'hollis40', name: 'Hollis40', age: '40', height: '6\'1"', role: 'Top', vibe: 'whatevers', bio: 'Straightforward. Solid. No games unless that\'s the game.', distance: '17 mi', online: false, lastActive: 'Active recently' },
  { key: 'vesperr', name: 'Vesperr', age: '26', height: '5\'9"', role: 'Bottom', vibe: 'collab', bio: 'Creative type. Let\'s make something weird and beautiful.', distance: '9 mi', online: true, lastActive: 'Online now' },
  { key: 'gaugeplay', name: 'Gaugeplay', age: '31', height: '6\'2"', role: 'Top', vibe: 'kink', bio: 'Precision matters. I measure twice.', distance: '9 mi', online: false, lastActive: 'Active 1 hour ago' },
  { key: 'lookin37', name: 'Lookin37', age: '37', height: '6\'0"', role: 'Vers', vibe: 'romance', bio: 'Looking for someone worth making time for. Are you?', distance: '10 mi', online: false, lastActive: 'Active 4 hours ago' },
  { key: 'ridge50', name: 'Ridge50', age: '50', height: '6\'2"', role: 'Top', vibe: 'whatevers', bio: 'Half a century and still showing up. That should tell you something.', distance: '18 mi', online: true, lastActive: 'Online now' },
  { key: 'mango', name: 'Mango', age: '24', height: '5\'10"', role: 'Top', vibe: 'whatevers', bio: '😈', distance: '4 mi', online: true, lastActive: 'Online now' },
  { key: 'cisco', name: 'Cisco', age: '37', height: '5\'9"', role: 'Top', vibe: 'kink', bio: 'I\'ve been told I\'m a lot. They weren\'t wrong. Come find out if you can handle it.', distance: '7 mi', online: true, lastActive: 'Online now' },
  { key: 'papichulo44', name: 'Papi Chulo', age: '44', height: '5\'11"', role: 'Top', vibe: 'romance', bio: 'Looking for someone who actually wants to be held after. Not sorry about it.', distance: '11 mi', online: true, lastActive: 'Online now' },
  { key: 'chino213', name: 'Chino213', age: '21', height: '5\'7"', role: 'Bottom', vibe: 'kink', bio: 'no limits. serious inquiries only', distance: '2 mi', online: true, lastActive: 'Online now' },
  { key: 'discrete310', name: 'Discrete310', age: '33', height: '6\'0"', role: 'Top', vibe: 'anon', bio: 'Married. Discrete. You know what that means and either you\'re cool with it or you\'re not.', distance: '16 mi', online: false, lastActive: 'Active 4 hours ago' },
  { key: 'solis41', name: 'Solis41', age: '41', height: '5\'11"', role: 'Side', vibe: 'whatevers', bio: 'Not here for hookups. Not here for relationships either. Figure that one out.', distance: '9 mi', online: false, lastActive: 'Active recently' },
  { key: 'tejano28', name: 'Tejano28', age: '28', height: '5\'10"', role: 'Vers', vibe: 'collab', bio: 'I cook. I clean. I also do other things. In that order if you\'re lucky.', distance: '10 mi', online: true, lastActive: 'Online now' },
  { key: 'picohopeless', name: 'Picohopeless', age: '20', height: '5\'8"', role: 'Bottom', vibe: 'romance', bio: 'hopeless romantic on a hookup app. the irony is not lost on me', distance: '3 mi', online: true, lastActive: 'Online now' },
  { key: 'cobre31', name: 'Cobre31', age: '31', height: '5\'11"', role: 'Top', vibe: 'kink', bio: 'You\'ll know exactly what you signed up for. I make sure of that before you walk through the door.', distance: '5 mi', online: false, lastActive: 'Active 1 hour ago' },
  { key: 'bignacho', name: 'BigNacho', age: '46', height: '5\'10"', role: 'Top', vibe: 'whatevers', bio: 'Big. Loud. A lot of fun at parties and elsewhere.', distance: '5 mi', online: false, lastActive: 'Active 3 hours ago' },
  { key: 'nofacela', name: 'Nofacela', age: '23', height: '5\'7"', role: 'Vers', vibe: 'anon', bio: 'face not visible for a reason. if that works for you, hmu', distance: '8 mi', online: false, lastActive: 'Active recently' },
  { key: 'formerathlete', name: 'Formerathlete', age: '35', height: '5\'9"', role: 'Bottom', vibe: 'whatevers', bio: 'Former athlete. Current mess. Still fun though.', distance: '11 mi', online: false, lastActive: 'Active 3 hours ago' },
  { key: 'miel26', name: 'Miel26', age: '26', height: '5\'10"', role: 'Vers', vibe: 'romance', bio: 'I make breakfast. That\'s all I\'m going to say about that.', distance: '9 mi', online: false, lastActive: 'Active 1 hour ago' },
  { key: 'toro', name: 'Toro', age: '39', height: '6\'0"', role: 'Top', vibe: 'kink', bio: 'The name is accurate. Ask around.', distance: '8 mi', online: false, lastActive: 'Active 4 hours ago' },
  { key: 'nobadgespls', name: 'Nobadgespls', age: '27', height: '5\'8"', role: 'Bottom', vibe: 'kink', bio: 'I know what I like and I\'m not embarrassed about it. You shouldn\'t be either.', distance: '6 mi', online: false, lastActive: 'Active 3 hours ago' },
  { key: 'flaco', name: 'Flaco', age: '22', height: '5\'9"', role: 'Vers', vibe: 'whatevers', bio: 'skinny but don\'t let that fool you', distance: '3 mi', online: true, lastActive: 'Online now' },
  { key: 'nsaduro', name: 'NSA Duro', age: '30', height: '6\'1"', role: 'Top', vibe: 'anon', bio: 'Not here for conversation. Respect that and we\'ll get along fine.', distance: '16 mi', online: false, lastActive: 'Active recently' },
  { key: 'canela38', name: 'Canela38', age: '38', height: '5\'10"', role: 'Vers', vibe: 'romance', bio: 'Divorced. Two kids. Still believe in something real. Judge me if you want.', distance: '8 mi', online: false, lastActive: 'Active recently' },
  { key: 'quintosd', name: 'Quintosd', age: '43', height: '5\'11"', role: 'Top', vibe: 'whatevers', bio: 'Been around long enough to know what I\'m doing. Short enough on patience for games.', distance: '10 mi', online: true, lastActive: 'Online now' },
  { key: 'bravo25', name: 'Bravo25', age: '25', height: '6\'0"', role: 'Bottom', vibe: 'kink', bio: 'Competitive by nature. Submissive by choice. There\'s a difference.', distance: '6 mi', online: true, lastActive: 'Online now' },
  { key: 'soju', name: 'Soju', age: '24', height: '5\'8"', role: 'Bottom', vibe: 'whatevers', bio: 'yes i\'m a bottom. no i\'m not your fantasy. figure out the difference before you message me.', distance: '4 mi', online: true, lastActive: 'Online now' },
  { key: 'ramenlate', name: 'Ramenlate', age: '29', height: '5\'9"', role: 'Vers', vibe: 'whatevers', bio: 'Late nights, bad decisions, good stories. Usually in that order.', distance: '5 mi', online: false, lastActive: 'Active 3 hours ago' },
  { key: 'jadefits', name: 'Jadefits', age: '27', height: '5\'10"', role: 'Top', vibe: 'kink', bio: 'Quiet in public. Completely different animal behind closed doors.', distance: '3 mi', online: false, lastActive: 'Active 2 hours ago' },
  { key: 'hiro22', name: 'Hiro22', age: '22', height: '5\'7"', role: 'Bottom', vibe: 'romance', bio: 'looking for something that doesn\'t end with being left on read at 3am. ambitious i know.', distance: '4 mi', online: true, lastActive: 'Online now' },
  { key: 'onitats', name: 'Oni Tats', age: '35', height: '5\'10"', role: 'Top', vibe: 'kink', bio: 'The tattoos are a hint. The rest you figure out in person.', distance: '8 mi', online: true, lastActive: 'Online now' },
  { key: 'mochi', name: 'Mochi', age: '26', height: '5\'8"', role: 'Vers', vibe: 'collab', bio: 'Filmmaker. Always casting. Come audition.', distance: '5 mi', online: true, lastActive: 'Online now' },
  { key: 'bao41', name: 'Bao41', age: '41', height: '5\'9"', role: 'Top', vibe: 'whatevers', bio: 'Big teddy bear energy until I\'m not. You\'ll know the difference when it happens.', distance: '12 mi', online: true, lastActive: 'Online now' },
  { key: 'zen', name: 'Zen', age: '31', height: '5\'11"', role: 'Side', vibe: 'anon', bio: 'Not interested in your life story. Not sharing mine either. We good?', distance: '6 mi', online: true, lastActive: 'Online now' },
  { key: 'drift20', name: 'Drift20', age: '20', height: '5\'7"', role: 'Bottom', vibe: 'kink', bio: '18+ only obviously. everything else is negotiable.', distance: '4 mi', online: true, lastActive: 'Online now' },
  { key: 'nori33', name: 'Nori33', age: '33', height: '5\'9"', role: 'Vers', vibe: 'romance', bio: 'I cook. Real food. If that\'s not enough of a pitch I don\'t know what to tell you.', distance: '9 mi', online: true, lastActive: 'Online now' },
  { key: 'kainsa', name: 'KaiNSA', age: '28', height: '5\'10"', role: 'Top', vibe: 'anon', bio: 'NSA. Clean. DDF. You know the drill.', distance: '8 mi', online: true, lastActive: 'Online now' },
  { key: 'taiko909', name: 'Taiko909', age: '38', height: '5\'9"', role: 'Vers', vibe: 'whatevers', bio: 'Drummer. Heavy hands. Good rhythm. Connect the dots.', distance: '6 mi', online: false, lastActive: 'Active recently' },
  { key: 'lune', name: 'Lune', age: '25', height: '5\'8"', role: 'Bottom', vibe: 'collab', bio: 'I make music at 2am and questionable decisions at 3am. sometimes both at once.', distance: '6 mi', online: true, lastActive: 'Online now' },
  { key: 'cinderplay', name: 'Cinderplay', age: '30', height: '6\'0"', role: 'Vers', vibe: 'kink', bio: 'You\'ll spend the whole time trying to figure me out. That\'s kind of the point.', distance: '14 mi', online: false, lastActive: 'Active 2 hours ago' },
  { key: 'elmside', name: 'Elmside', age: '36', height: '5\'11"', role: 'Side', vibe: 'romance', bio: 'Not what you expected. Hopefully better.', distance: '9 mi', online: false, lastActive: 'Active 5 hours ago' },
  { key: 'onyxdc', name: 'Onyxdc', age: '27', height: '6\'1"', role: 'Top', vibe: 'romance', bio: 'Hopeful but not naive. There\'s a difference and I know it well.', distance: '5 mi', online: false, lastActive: 'Active 1 hour ago' },
  { key: 'verso', name: 'Verso', age: '22', height: '5\'11"', role: 'Vers', vibe: 'collab', bio: 'Poet. Overthinker. Probably writing about you already.', distance: '5 mi', online: false, lastActive: 'Active recently' },
  { key: 'cadeatl', name: 'Cadeatl', age: '34', height: '6\'0"', role: 'Side', vibe: 'anon', bio: 'Not on here for what you think. Also exactly on here for what you think.', distance: '11 mi', online: false, lastActive: 'Active 6 hours ago' },
  { key: 'bigsable', name: 'BigSable', age: '45', height: '6\'2"', role: 'Top', vibe: 'whatevers', bio: 'Grown man energy. Take it or leave it.', distance: '9 mi', online: true, lastActive: 'Online now' },
  { key: 'flux25', name: 'Flux25', age: '25', height: '6\'0"', role: 'Bottom', vibe: 'kink', bio: 'I did my research. Have you done yours?', distance: '5 mi', online: true, lastActive: 'Online now' },
  { key: 'indigo', name: 'Indigo', age: '23', height: '5\'10"', role: 'Vers', vibe: 'romance', bio: 'i make playlists for people i like. that\'s probably too much information for a bio.', distance: '6 mi', online: true, lastActive: 'Online now' },
  { key: 'discrete404', name: 'Discrete404', age: '38', height: '6\'1"', role: 'Top', vibe: 'anon', bio: 'Discrete. Professional. You won\'t find me anywhere else.', distance: '13 mi', online: false, lastActive: 'Active recently' },
  { key: 'soleilshoots', name: 'Soleilshoots', age: '29', height: '5\'11"', role: 'Bottom', vibe: 'collab', bio: 'Photographer looking for a muse. Clothing optional.', distance: '7 mi', online: true, lastActive: 'Online now' },
  { key: 'reefnsa', name: 'ReefNSA', age: '31', height: '6\'2"', role: 'Vers', vibe: 'anon', bio: 'clean. safe. no drama. that\'s the whole bio.', distance: '8 mi', online: false, lastActive: 'Active recently' },
  { key: 'dusk20', name: 'Dusk20', age: '20', height: '5\'10"', role: 'Bottom', vibe: 'romance', bio: 'First real situationship just ended. Apparently I\'m back on here. Cool cool cool.', distance: '2 mi', online: false, lastActive: 'Active recently' },
  { key: 'quincy48', name: 'Quincy48', age: '48', height: '6\'1"', role: 'Top', vibe: 'whatevers', bio: 'Old enough to not explain myself. Young enough to still want to.', distance: '14 mi', online: false, lastActive: 'Active recently' },
  { key: 'soundguy', name: 'SoundGuy', age: '33', height: '6\'0"', role: 'Side', vibe: 'collab', bio: 'Sound engineer. I work with what I\'m given and make it better.', distance: '12 mi', online: true, lastActive: 'Online now' },
  { key: 'cayo26', name: 'Cayo26', age: '26', height: '6\'1"', role: 'Top', vibe: 'kink', bio: 'Specific tastes. Specific type. Message me if you think you qualify.', distance: '3 mi', online: true, lastActive: 'Online now' },
  { key: 'nofacenoname', name: 'Nofacenoname', age: '24', height: '5\'11"', role: 'Vers', vibe: 'anon', bio: 'no face. no name. no problem.', distance: '11 mi', online: true, lastActive: 'Online now' },
  { key: 'stone40', name: 'Stone40', age: '40', height: '6\'2"', role: 'Top', vibe: 'romance', bio: 'Been told I\'m intimidating. Been told I\'m a softie. Both are true depending on the day.', distance: '12 mi', online: false, lastActive: 'Active 2 hours ago' },
  { key: 'mirageanon', name: 'Mirageanon', age: '28', height: '5\'11"', role: 'Bottom', vibe: 'anon', bio: 'Here when I\'m here. Gone when I\'m gone. Don\'t read into it.', distance: '14 mi', online: false, lastActive: 'Active recently' },
  { key: 'tempo32', name: 'Tempo32', age: '32', height: '6\'0"', role: 'Vers', vibe: 'collab', bio: 'Dancer. Choreographer. My whole life is about bodies moving together. Draw your own conclusions.', distance: '4 mi', online: false, lastActive: 'Active 3 hours ago' },
  { key: 'flint36', name: 'Flint36', age: '36', height: '6\'1"', role: 'Top', vibe: 'kink', bio: 'Not gentle. Not sorry about it. Safe word required before we start.', distance: '15 mi', online: false, lastActive: 'Active recently' },
  { key: 'lumenlate', name: 'Lumenlate', age: '21', height: '5\'10"', role: 'Bottom', vibe: 'romance', bio: 'Romantic. Sensitive. On a hookup app. I contain multitudes.', distance: '3 mi', online: false, lastActive: 'Active recently' },
  { key: 'vale43', name: 'Vale43', age: '43', height: '6\'0"', role: 'Side', vibe: 'whatevers', bio: 'Not complicated. Just particular. There\'s a difference.', distance: '13 mi', online: true, lastActive: 'Online now' }
];

function buildProfile(p) {
  return {
    key: p.key,
    name: p.name,
    avatar: '',
    realPhotos: [],
    naughtyPhotos: [],
    bio: p.bio,
    stats: {
      distance: p.distance,
      age: p.age,
      height: p.height,
      role: p.role,
      vibe: p.vibe.toLowerCase()
    },
    location: { lat: null, lng: null },
    online: p.online,
    lastActive: p.lastActive,
    canMessage: false,
    hasProfile: true,
    narrative: false,
    myAvatar: '',
    messages: []
  };
}

const raw = fs.readFileSync(JSON_PATH, 'utf8');
const existing = JSON.parse(raw);
const existingKeys = new Set(existing.map(p => p.key));

let added = 0;
let skipped = 0;

ROSTER.forEach(function(p) {
  if (existingKeys.has(p.key)) {
    console.log('SKIP (already exists): ' + p.key);
    skipped++;
  } else {
    existing.push(buildProfile(p));
    console.log('ADD: ' + p.key);
    added++;
  }
});

fs.writeFileSync(JSON_PATH, JSON.stringify(existing, null, 2), 'utf8');
console.log('\nDone. Added: ' + added + ' | Skipped: ' + skipped + ' | Total: ' + existing.length);
