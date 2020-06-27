import React from "react";
import styled from "styled-components";

const CommentsWrapper = styled("div")`
  background: #fff;
`;

const Comment = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1em;
`;

const CommentDivider = styled("hr")`
  margin: 0px 2em;
  border: 1px solid #ddd;
`

const CommentText = styled("div")`
  flex: 1;
`;

const CommentEvaluationWrapper = styled("div")`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 1.2em;
`;

const CommentEvaluation = styled("div")`
  flex: 1;
`;

const CommentEvaluationStars = styled("span")`
  color: orange;
`;

const EvalsList = ({ evaluations }) => {
  return evaluations.map((evaluation, i) => {
    const satisfaction = evaluation["satisfaction"];
    const difficulty = evaluation["difficulty"];
    const benefit = evaluation["benefit"];
    
    return (
      <CommentsWrapper>
        {i !== 0 && <CommentDivider />}
        <Comment key={i}>
          <CommentText>
            {evaluation["comment"]}
          </CommentText>
          <CommentEvaluationWrapper>
            <CommentEvaluation>
              Satisfaction:{' '}
              <CommentEvaluationStars>
                {"★".repeat(satisfaction) + "☆".repeat(5-satisfaction)}
              </CommentEvaluationStars>
            </CommentEvaluation>
            <CommentEvaluation>
              Difficulty:{' '}
              <CommentEvaluationStars>
                {"★".repeat(difficulty) + "☆".repeat(5-difficulty)}
              </CommentEvaluationStars>
            </CommentEvaluation>
            <CommentEvaluation>
              Benefit:{' '}
              <CommentEvaluationStars>
                {"★".repeat(benefit) + "☆".repeat(5-benefit)}
              </CommentEvaluationStars>
            </CommentEvaluation>
          </CommentEvaluationWrapper>
        </Comment>
      </CommentsWrapper>
    )
  });
}

export default EvalsList;
