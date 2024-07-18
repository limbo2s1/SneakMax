import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import "../../components/chooseForm/Choose.scss";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import ThirdForm from "./ThirdForm";
import FourthForm from "./FourthForm";

type FormData = {
  bootsChoice: string[];
  name: string;
  email: string;
};

export default function Choose() {
  const methods = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);

    setTimeout(() => {
      methods.reset();

      setPage(1);
    }, 1000);
  };

  const [page, setPage] = useState(1);

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="container" id="choose">
      <div className="choose-block">
        {page !== 4 && (
          <>
            <h3 className="choose-heading">Мы подберем идеальную пару для вас</h3>
            <p className="choose-description">
              Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями
            </p>
          </>
        )}
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="form-boots">
            {page === 1 && <FirstForm />}
            {page === 2 && <SecondForm />}
            {page === 3 && <ThirdForm />}
            {page === 4 && <FourthForm />}
            <div className="choose-boots-counter">
              {page !== 4 && (
                <>
                  <p className="choose-counter">{page} из 4</p>
                  <button type="button" className="choose-form-submit" onClick={nextPage}>
                    Следующий шаг
                  </button>
                </>
              )}
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
