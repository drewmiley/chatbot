import bio from '../constants/bio';
import conjunctions from '../constants/conjunctions';

export default function RandomBioGenerator() {
    const seed = (s) => {
        s = Math.sin(s) * 10000;
        return s - Math.floor(s);
    };

    let generatedBio = '';
    generatedBio += bio.get(Math.floor(bio.size * seed(Math.random())));
    generatedBio += conjunctions.get(Math.floor(conjunctions.size * seed(Math.random())));
    generatedBio += bio.get(Math.floor(bio.size * seed(Math.random())));
    generatedBio += conjunctions.get(Math.floor(conjunctions.size * seed(Math.random())));
    generatedBio += bio.get(Math.floor(bio.size * seed(Math.random())));

    return generatedBio.charAt(0).toUpperCase() + generatedBio.slice(1);
}