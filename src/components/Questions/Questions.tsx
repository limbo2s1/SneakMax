import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import "../Questions/Questions.scss";
import Plus from "../../icons/Plus";
import X from "../../icons/X";

export default function Questions() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="container" id="questions">
      <h2 className="questions-heading">Часто задаваемые вопросы</h2>
      <div className="questions-block">
        <Accordion
          className={`accordion-custom accordion-first ${expanded === "panel1" ? "expanded" : ""}`}
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            className="accordion-open"
            expandIcon={expanded === "panel1" ? <X /> : <Plus />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography className="questions-head">Вопрос 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="questions-body">
              А это ответ 1: в комплексе функционируют 6 детских садов с площадками, воспитателями и
              всякими другими людьми
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={`accordion-custom ${expanded === "panel2" ? "expanded" : ""}`}
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={expanded === "panel2" ? <X /> : <Plus />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>Вопрос 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              А это ответ 2: в комплексе функционируют 6 детских садов с площадками, воспитателями и
              всякими другими людьми
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
