import { ChangeEvent, FC } from 'react';

type InputType = {
    id: string;
    value: string;
    type?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
};

const Input: FC<InputType> = ({
    id,
    value,
    onChange,
    type,
    placeholder,
}: InputType) => {
    return (
        <div className='relative'>
            <input
                id={id}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className='w-full text-lg py-2 border-b border-gray-300 rounded-2xl focus:outline-none focus:border-indigo-500'
            />
        </div>
    );
};

export default Input;
