import React from "react";
import CategoryBox from "./CategoryBox";
import "./jobCategories.css";
import { BsQuestionLg } from "react-icons/bs";
import { FiActivity } from "react-icons/fi";
import { BiCodeAlt } from "react-icons/bi";
import { GiTeacher } from "react-icons/gi";
import { RiToolsFill } from "react-icons/ri";
const JContent = () => {
  return (
    <div>
      <div className="JobCategory">
        <div className="Jheader__container">
          <h1>Lorem Categories</h1>
        </div>

        <div className="Jbody__container">
          <div className="Jbody__content">
            <CategoryBox
              BGcolor={"#398AB9"}
              Title={"Programming"}
              Icon={<BiCodeAlt className="box__icon" />}
            />
            <CategoryBox
              BGcolor={"#FE7E6D"}
              Title={"Teacher"}
              Icon={<GiTeacher className="box__icon" />}
            />
            <CategoryBox
              BGcolor={"#B8B5FF"}
              Title={"Mechanic"}
              Icon={<RiToolsFill className="box__icon" />}
            />
            <CategoryBox
              BGcolor={"#787A91"}
              Title={"Web Development"}
              Icon={<BsQuestionLg className="box__icon" />}
            />
            <CategoryBox
              BGcolor={"#5C7AEA"}
              Title={"Web Development"}
              Icon={<BsQuestionLg className="box__icon" />}
            />
            <CategoryBox
              BGcolor={"#FDB827"}
              Title={"Web Development"}
              Icon={<BsQuestionLg className="box__icon" />}
            />
            <CategoryBox
              BGcolor={"#7FC8A9"}
              Title={"Web Development"}
              Icon={<BsQuestionLg className="box__icon" />}
            />
            <CategoryBox
              BGcolor={"#F05454"}
              Title={"Web Development"}
              Icon={<BsQuestionLg className="box__icon" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JContent;
