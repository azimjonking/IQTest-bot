import { Fragment, useState, useEffect } from "react";
import styles from "./Statistics.module.css";
import User from "./User";
import {
  FaSortAlphaDown,
  FaSortAlphaDownAlt,
  FaSortNumericDown,
  FaSortNumericDownAlt,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/slices/users/usersSlice";
import Loading from "../loading/Loading";

const Statistics = () => {
  const [sortByName, setSortByName] = useState(false);
  const [sortByAge, setSortByAge] = useState(false);
  const [sortByScore, setSortByScore] = useState(false);
  const { users, status, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  console.log(users);
  console.log(status);
  console.log(error);

  const sortByNameFunction = () => {
    setSortByName(!sortByName);
    setSortByAge(false);
    setSortByScore(false);
  };

  const sortByAgeFunction = () => {
    setSortByName(false);
    setSortByAge(!sortByAge);
    setSortByScore(false);
  };

  const sortByScoreFunction = () => {
    setSortByName(false);
    setSortByAge(false);
    setSortByScore(!sortByScore);
  };

  const students = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <div className={styles.statistics}>
      {status == "loading" && <Loading />}
      {status == "succeeded" && (
        <>
          <h1 className={styles.title}>IQ Test Statistics</h1>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr className={styles.row}>
                <td>
                  <span>№</span>
                </td>
                <td className={styles.fullname}>
                  <span>Fullname</span>
                  <button className={styles.sort} onClick={sortByNameFunction}>
                    {!sortByName && <FaSortAlphaDown />}
                    {sortByName && <FaSortAlphaDownAlt />}
                  </button>
                </td>
                <td className={styles.phone}>
                  <span>Phone Number</span>
                </td>
                <td className={styles.age}>
                  <span>Age</span>
                  <button className={styles.sort} onClick={sortByAgeFunction}>
                    {!sortByAge && <FaSortNumericDown />}
                    {sortByAge && <FaSortNumericDownAlt />}
                  </button>
                </td>
                <td className={styles.score}>
                  <span>Score</span>
                  <button className={styles.sort} onClick={sortByScoreFunction}>
                    {!sortByScore && <FaSortNumericDown />}
                    {sortByScore && <FaSortNumericDownAlt />}
                  </button>
                </td>
                <td className={styles.address}>
                  <span>Address</span>
                </td>
              </tr>
            </thead>

            <tbody className={styles.tbody}>
              {students &&
                students.map((student, i) => {
                  return (
                    <Fragment key={i}>
                      <User student={student} i={i} />
                    </Fragment>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default Statistics;
