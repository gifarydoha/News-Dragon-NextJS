import { getCurrentDate } from "@/utils/getCurrentDate";
import { Typography } from "@mui/material";

{
  /*
Author: Abu Jar Gifary Doha;
Date: 22/02/2024;
Description: ;
*/
}

const HomePage = () => {
  const currentDate = getCurrentDate();
  return (
    <div>
      <Typography textAlign="center" className="my-4">
        {currentDate}
      </Typography>
      <h2>Home page</h2>
    </div>
  );
};

export default HomePage;
