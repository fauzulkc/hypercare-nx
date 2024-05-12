export interface DetailedCardProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  role: string;
  joinDate: Date;
  description: string;
}

export const DetailedCard = (props: DetailedCardProps) => {
  return (
    <div className="flex flex-col max-w-screen-sm border-2 border-white border-solid shadow-2xl md:max-w-screen-lg md:flex-row rounded-3xl bg-slate-50">
      <img
        className="object-cover object-center w-full h-auto md:w-2/5 rounded-r-3xl rounded-l-3xl md:rounded-r-none aspect-square"
        src={props.imageUrl}
        alt={props.firstName}
      />
      <div className="flex flex-col w-full gap-2 p-4 pr-4 h-max">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-normal">
              <span className="font-bold">{props.firstName}</span>{' '}
              {props.lastName}
            </h2>
            <p className="text-sm font-thin leading-5 text-gray-600">
              ({props.role})
            </p>
          </div>
          <small className="text-sm font-thin leading-5 text-gray-600">
            Joined On: {props.joinDate.toLocaleDateString()}
          </small>
        </div>
        <p className="overflow-hidden overflow-y-scroll text-sm font-thin leading-5 text-gray-800 sm:overflow-y-auto max-h-48 md:max-h-96">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default DetailedCard;
