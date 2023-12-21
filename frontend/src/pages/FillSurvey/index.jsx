import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { sendRequest } from "../../core/request";
import InputGroup from "../../components/InputGroup";
import Button from "../../components/Button";

const FillSurvey = () => {
  const { id } = useParams();
  console.log(id);
  const [survey, setSurvey] = useState({});
  useEffect(() => {
    const getSurveys = async () => {
      const response = await sendRequest({
        route: `survey/${id}`,
        method: "GET",
      });
      //   return response
      console.log(response.surveys);
      let data = await response.survey;
      setSurvey(data);
    };
    getSurveys();
    // setSurveys(getSurveys())
  }, []);
  console.log(survey);
  return (
    <div>
      <h2>Survey Title {survey[0]?.title}</h2>
      <h3>Survey Description {survey[0]?.description}</h3>
      <div className="questions question-type-wrapper rounded-10">
        {survey[0]?.questions?.map((quest) => {
          return (
            <div>
              <div>{quest?.title} </div>
              {quest.type === "short" ? (
                <>
                  <InputGroup
                    type={"text"}
                    label={quest.title}
                    className={"text-black"}
                  />
                </>
              ) : null}
              {quest?.type === "multiple"
                ? quest?.answers?.map((ans) => {
                    return (
                      <div>
                        <InputGroup
                          type={"checkbox"}
                          label={ans.title}
                          className={"text-black"}
                        />
                      </div>
                    );
                  })
                : null}
            </div>
          );
        })}
        <Button text="Submit"/>
      </div>
    </div>
  );
};

export default FillSurvey;
