import { useEffect, useState } from 'react';

export interface UserCardProps {
  imageURL: string;
  imageAlt?: string;
  title: string;
  description?: string;
  buttonText?: string;
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
    <div className="d-flex flex-col items-stretch w-64 h-auto bg-gradient-to-r from-50% from-white to-50% bg-brand-color shadow-xl rounded-3xl">
      <div className="flex items-center justify-center w-full px-8 py-6 bg-brand-color rounded-3xl">
        <div className="flex items-center justify-center w-28 h-28 border-[2.5px] border-white border-solid rounded-full">
          <img
            src={
              props.imageURL ||
              'https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            }
            alt={props.imageAlt || ''}
            className="object-cover object-center w-full h-full p-[2.5px] rounded-full aspect-square"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-start w-full gap-6 px-4 py-4 bg-white rounded-3xl">
        <div
          id="user-info"
          className="flex flex-col items-center justify-start w-full gap-2"
        >
          {trimmedTitle && (
            <h2 className="text-lg font-normal text-center">{trimmedTitle}</h2>
          )}
          {trimmedDescription && (
            <p className="text-sm font-thin leading-5 text-center text-gray-600">
              {trimmedDescription}
            </p>
          )}
        </div>
        {trimmedButtonText && (
          <button className="w-32 h-8 text-sm font-normal text-white transition duration-150 ease-in-out rounded-lg bg-brand-color hover:saturate-150 hover:-translate-y-[1px]">
            {trimmedButtonText}
          </button>
        )}
      </div>
    </div>
  );
}

export default UserCard;
