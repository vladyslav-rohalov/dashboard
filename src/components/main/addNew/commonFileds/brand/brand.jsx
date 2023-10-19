import { Autocomplete, createFilterOptions } from '@mui/material';
import { Input } from '../../addNew.styled';
export default function Brand({ value, onChange }) {
  const filter = createFilterOptions();

  const addNewBrand = newBrand => {
    console.log('newBrand: ', newBrand);
  };

  return (
    <Autocomplete
      value={value}
      onChange={(e, newValue) => {
        if (typeof newValue === 'string') {
          onChange(newValue);
        } else if (newValue && newValue.inputValue) {
          addNewBrand(newValue.inputValue);
          onChange({ brand: newValue.inputValue });
        } else {
          onChange(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        const isExisting = options.some(option => inputValue === option.brand);
        if (inputValue !== '' && !isExisting) {
          filtered.push({
            inputValue,
            brand: `Add "${inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="brands"
      options={brandList}
      getOptionLabel={option => {
        if (typeof option === 'string') {
          return option;
        }
        if (option.inputValue) {
          return option.inputValue;
        }
        return option.brand;
      }}
      renderOption={(props, option) => <li {...props}>{option.brand}</li>}
      freeSolo
      renderInput={params => (
        <Input {...params} label="Brand" width={300} required />
      )}
    />
  );
}

const brandList = [
  { brand: 'The Shawshank Redemption' },
  { brand: 'The Godfather' },
  { brand: 'The Godfather: Part II' },
  { brand: 'The Dark Knight' },
  { brand: '12 Angry Men' },
  { brand: "Schindler's List" },
  { brand: 'Pulp Fiction' },
  {
    brand: 'The Lord of the Rings: The Return of the King',
  },
  { brand: 'The Good, the Bad and the Ugly' },
  { brand: 'Fight Club' },
  {
    brand: 'The Lord of the Rings: The Fellowship of the Ring',
  },
  {
    brand: 'Star Wars: Episode V - The Empire Strikes Back',
  },
  { brand: 'Forrest Gump' },
  { brand: 'Inception' },
  {
    brand: 'The Lord of the Rings: The Two Towers',
  },
  { brand: "One Flew Over the Cuckoo's Nest" },
  { brand: 'Goodfellas' },
  { brand: 'The Matrix' },
  { brand: 'Seven Samurai' },
  {
    brand: 'Star Wars: Episode IV - A New Hope',
  },
  { brand: 'City of God' },
  { brand: 'Se7en' },
  { brand: 'The Silence of the Lambs' },
  { brand: "It's a Wonderful Life" },
  { brand: 'Life Is Beautiful' },
  { brand: 'The Usual Suspects' },
  { brand: 'Léon: The Professional' },
  { brand: 'Spirited Away' },
  { brand: 'Saving Private Ryan' },
  { brand: 'Once Upon a Time in the West' },
  { brand: 'American History X' },
  { brand: 'Interstellar' },
  { brand: 'Casablanca' },
  { brand: 'City Lights' },
  { brand: 'Psycho' },
  { brand: 'The Green Mile' },
  { brand: 'The Intouchables' },
  { brand: 'Modern Times' },
  { brand: 'Raiders of the Lost Ark' },
  { brand: 'Rear Window' },
  { brand: 'The Pianist' },
  { brand: 'The Departed' },
  { brand: 'Terminator 2: Judgment Day' },
  { brand: 'Back to the Future' },
  { brand: 'Whiplash' },
  { brand: 'Gladiator' },
  { brand: 'Memento' },
  { brand: 'The Prestige' },
  { brand: 'The Lion King' },
  { brand: 'Apocalypse Now' },
  { brand: 'Alien' },
  { brand: 'Sunset Boulevard' },
  {
    brand:
      'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
  },
  { brand: 'The Great Dictator' },
  { brand: 'Cinema Paradiso' },
  { brand: 'The Lives of Others' },
  { brand: 'Grave of the Fireflies' },
  { brand: 'Paths of Glory' },
  { brand: 'Django Unchained' },
  { brand: 'The Shining' },
  { brand: 'WALL·E' },
  { brand: 'American Beauty' },
  { brand: 'The Dark Knight Rises' },
  { brand: 'Princess Mononoke' },
  { brand: 'Aliens' },
  { brand: 'Oldboy' },
  { brand: 'Once Upon a Time in America' },
  { brand: 'Witness for the Prosecution' },
  { brand: 'Das Boot' },
  { brand: 'Citizen Kane' },
  { brand: 'North by Northwest' },
  { brand: 'Vertigo' },
  {
    brand: 'Star Wars: Episode VI - Return of the Jedi',
  },
  { brand: 'Reservoir Dogs' },
  { brand: 'Braveheart' },
  { brand: 'M' },
  { brand: 'Requiem for a Dream' },
  { brand: 'Amélie' },
  { brand: 'A Clockwork Orange' },
  { brand: 'Like Stars on Earth' },
  { brand: 'Taxi Driver' },
  { brand: 'Lawrence of Arabia' },
  { brand: 'Double Indemnity' },
  {
    brand: 'Eternal Sunshine of the Spotless Mind',
  },
  { brand: 'Amadeus' },
  { brand: 'To Kill a Mockingbird' },
  { brand: 'Toy Story 3' },
  { brand: 'Logan' },
  { brand: 'Full Metal Jacket' },
  { brand: 'Dangal' },
  { brand: 'The Sting' },
  { brand: '2001: A Space Odyssey' },
  { brand: "Singin' in the Rain" },
  { brand: 'Toy Story' },
  { brand: 'Bicycle Thieves' },
  { brand: 'The Kid' },
  { brand: 'Inglourious Basterds' },
  { brand: 'Snatch' },
  { brand: '3 Idiots' },
  { brand: 'Monty Python and the Holy Grail' },
];
