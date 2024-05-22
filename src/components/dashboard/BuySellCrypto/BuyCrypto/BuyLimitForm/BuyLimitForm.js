import { Checkbox, Input } from 'components/ui/InputTypes';
import React, { useState } from 'react';
import { ReactComponent as InfoIcon } from "assets/images/info.svg";


const BuyLimitForm = () => {

    const [request, updateRequest] = useState({
        limitPrice: "",
        type: "",
        amount: "",
        allowPost: true
    });



    const handleChange = (e) => {
        const { name, value } = e.target;
        updateRequest({ ...request, [name]: value });
    };

    return (
        <>
            <form>
                <Input
                    grpClass='mb-3'
                    label={"Limit price"}
                    type='text'
                    name='limitPrice'
                    id='limitPrice'
                    placeholder='0.00 USD'
                    value={request?.limitPrice}
                    onChange={handleChange}
                    hideLabel
                    hideError
                />
                <Input
                    grpClass='mb-3'
                    label={"Amount"}
                    type='text'
                    name='number'
                    id='amount'
                    placeholder='0.00 USD'
                    value={request?.amount}
                    onChange={handleChange}
                    hideLabel
                    hideError
                />

                <Input
                    grpClass='mb-3'
                    label={"Type"}
                    type='text'
                    name='type'
                    id='type'
                    placeholder='Good till cancelled'
                    value={request?.type}
                    onChange={handleChange}
                    hideLabel
                    hideError
                />
                <Checkbox
                    label={"Post Only"}
                    checked={request?.allowPost}
                    onChange={(value) => console.log(value)}
                    grpClass={'check__group'}
                >
                    <div className="input__group--label">
                        <span>Post Only</span>
                        <InfoIcon />
                    </div>
                </Checkbox>

                <div className='form__info'>
                    <span className='info__text'>Total</span>
                    <span className='info__text'>0.00</span>
                </div>
                <button className='btn btn__gradient'>
                    Buy BTC
                </button>
            </form>
            <hr />

            <div className='row'>
                <div className='col-6'>
                    <span className="info__text">
                        Total account value
                    </span><br />
                    <span className="info__text--lg text-white">
                        0.00
                    </span>

                </div>
                <div className='col-6'>
                    <span className="info__text">
                        NGN
                    </span><br />
                </div>
            </div>
            <div className="row justify-content-between">
                <div className='col-6'>
                    <span className="info__text">
                        Open Orders
                    </span><br />
                    <span className="info__text--lg text-white">
                        0.00
                    </span>
                </div>
                <div className='col-6'>
                    <span className="info__text">
                        Available
                    </span><br />
                    <span className="info__text--lg text-white">
                        0.00
                    </span>
                </div>
            </div>

            <button className="btn btn-primary my-3">Deposit</button>
        </>
    );
};

export default BuyLimitForm;