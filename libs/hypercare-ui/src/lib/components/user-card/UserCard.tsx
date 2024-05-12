import { useEffect, useState } from 'react';

export interface UserCardProps {
  imageURL?: string;
  imageAlt?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  onClick?: () => void;
  loading?: boolean;
}

function truncate(str: string, n: number) {
  return str.length > n ? str.substr(0, n - 1) + '...' : str;
}
const trimDescription = (description = '') => {
  if (!description) {
    return '';
  }
  return truncate(description, 100);
};

const trimTitle = (title = '') => {
  if (!title) {
    return '';
  }
  return truncate(title, 20);
};
const trimButtonText = (buttonText = '') => {
  if (!buttonText) {
    return '';
  }
  return truncate(buttonText, 10);
};

export function UserCard(props: UserCardProps) {
  const [trimmedDescription, setTrimmedDescription] = useState(
    trimDescription(props.description)
  );
  const [trimmedTitle, setTrimmedTitle] = useState(trimTitle(props.title));
  const [trimmedButtonText, setTrimmedButtonText] = useState(
    trimButtonText(props.buttonText)
  );
  useEffect(() => {
    setTrimmedDescription(trimDescription(props.description));
  }, [props.description]);
  useEffect(() => {
    setTrimmedTitle(trimTitle(props.title));
  }, [props.title]);
  useEffect(() => {
    setTrimmedButtonText(trimButtonText(props.buttonText));
  }, [props.buttonText]);
  return (
    <div
      className={`flex flex-col items-start w-64 h-max bg-gradient-to-r from-50% from-white to-50% bg-brand-color shadow-xl rounded-3xl`}
    >
      <div className="flex items-center justify-center w-full px-8 py-6 bg-brand-color rounded-3xl">
        <div className="flex items-center justify-center w-28 h-28 border-[2.5px] border-white border-solid rounded-full">
          {props.imageURL && (
            <img
              src={props.imageURL}
              alt={props.imageAlt || ''}
              className="object-cover object-center w-full h-full p-[2.5px] rounded-full aspect-square"
            />
          )}
          {!props.imageURL && (
            <div
              className={`w-full h-full bg-white rounded-full ${
                props.loading && 'animate-pulse'
              }`}
            />
          )}
        </div>
      </div>
      <div className="flex flex-col items-center justify-start w-full h-auto gap-6 px-4 py-4 bg-white rounded-3xl">
        <div
          id="user-info"
          className="flex flex-col items-center justify-start w-full gap-2"
        >
          {trimmedTitle && (
            <h2 className="text-lg font-normal text-center">{trimmedTitle}</h2>
          )}
          {props.loading && (
            <div className="w-32 h-2 bg-gray-200 rounded-lg animate-pulse"></div>
          )}
          {trimmedDescription && (
            <p className="text-sm font-thin leading-5 text-center text-gray-600">
              {trimmedDescription}
            </p>
          )}
          {props.loading && (
            <>
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="h-2 bg-gray-200 rounded-lg w-52 animate-pulse"></div>
                <div className="h-2 bg-gray-200 rounded-lg w-52 animate-pulse"></div>
                <div className="h-2 bg-gray-200 rounded-lg w-52 animate-pulse"></div>
                <div className="h-2 bg-gray-200 rounded-lg w-52 animate-pulse"></div>
                <button className="w-32 h-8 text-sm font-normal text-white transition duration-150 ease-in-out rounded-lg bg-brand-color hover:saturate-150 hover:-translate-y-[1px] animate-pulse"></button>
              </div>
            </>
          )}
        </div>
        {trimmedButtonText && (
          <button
            className="w-32 h-8 text-sm font-normal text-white transition duration-150 ease-in-out rounded-lg bg-brand-color hover:saturate-150 hover:-translate-y-[1px]"
            onClick={props.onClick}
          >
            {trimmedButtonText}
          </button>
        )}
      </div>
    </div>
  );
}

export default UserCard;
