import { BiCheck as CheckIcon } from 'react-icons/bi';
import { GiGraduateCap as GraduateCap } from 'react-icons/gi';
import { MainWrapper, DifficultyWrapper, InfoWrapper } from './components/Wrappers';
import { SudokuGrid } from './components/SudokuGrid';
import { Cell } from './components/Cell';
import { Button } from './components/Button';
import { PreviewButton } from './components/PreviewButton';

const data = {
    board: [
        [0, 0, 0, 0, 0, 0, 8, 0, 0],
        [0, 0, 4, 0, 0, 8, 0, 0, 9],
        [0, 7, 0, 0, 0, 0, 0, 0, 5],
        [0, 1, 0, 0, 7, 5, 0, 0, 8],
        [0, 5, 6, 0, 9, 1, 3, 0, 0],
        [7, 8, 0, 0, 0, 0, 0, 0, 0],
        [0, 2, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 9, 3, 0, 0, 1, 0],
        [0, 0, 5, 7, 0, 0, 4, 0, 3],
    ],
};

const App: React.FC = () => {
    return (
        <MainWrapper>
            <SudokuGrid>
                {data.board.map((row) =>
                    row.map((value, index) => {
                        if (value !== 0) {
                            return <Cell type="number" value={value} key={index} bgColor={true} readOnly />;
                        }
                        return <Cell type="number" min={1} max={9} key={index} />;
                    })
                )}
            </SudokuGrid>

            <DifficultyWrapper>
                <h4>Generate:</h4>
                <div>
                    <Button>Easy</Button>
                    <Button>Medium</Button>
                    <Button>Hard</Button>
                    <Button>Random</Button>
                    <Button border>Clear</Button>
                </div>
            </DifficultyWrapper>

            <InfoWrapper>
                <PreviewButton boldText="right">
                    <p>
                        <CheckIcon />
                        Validate
                    </p>
                    <p>solved</p>
                </PreviewButton>
                <PreviewButton boldText="left">
                    <p>easy</p>
                    <p>
                        <GraduateCap />
                        Difficulty
                    </p>
                </PreviewButton>
            </InfoWrapper>

            <Button border fullWidth>
                Solve
            </Button>
        </MainWrapper>
    );
};

export default App;
