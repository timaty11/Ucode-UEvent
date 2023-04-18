import React from 'react';
import moment from 'moment/min/moment-with-locales';

import ReactionComment from './ReactionComment.jsx'

import $api from '../../../../utils/api.js';
import apiClientRoutes from '../../../routes/api/apiClientRoutes.js';
import { useUser } from '../../../../hooks/user/useUser.js'
import { useCommentsReaction } from '../../../../hooks/useCommentReaction.js';
import UserContext from '../../../context/UserContext.js';

import default_avatar from '../../../temp/avatar.png';

const Comment = ({ data }) => {
  const currentLang = localStorage.getItem('i18nextLng')
  const datePublish = moment(new Date(data.created_at)).locale(currentLang === 'ua' ? 'uk' : currentLang).format('D MMMM,HH:mm');
  const { isLoading, user } = useUser(data.user_id);
  const [show, setShow] = React.useState(false);
  const [content, setContent] = React.useState(data.content);
  const [currentContent, setCurrentContent] = React.useState(data.content);
  const [isDelete, setDelete] = React.useState(false);
  const { currentUser } = React.useContext(UserContext);


  const reaction = useCommentsReaction(data.id);

  const commentDeleteButtonHandle = async () => {
    console.log("pidoras clicked delete");
    try {
      const response = await $api.delete(apiClientRoutes.deleteComment(data.id));
      setDelete(!isDelete);
      console.log(response);
    } catch(err) {
      console.log(err)
    }
  }

  const handleChangeComment = async () => {
    try {
      if (content !== currentContent) {
        const response = await $api.patch(apiClientRoutes.changeComment(data.id), { content });
        setCurrentContent(content);
        console.log(response);
      }
      setShow(!show);
    } catch (e) {
      console.log(e);
    }
  }


  return isLoading || isDelete ? <></> :
    <div className="items-center ml-[15%] mr-[15%] rounded-2xl p-4 m-4 shadow-lg hover:shadow-2xl transition duration-500 dark:bg-dark-bg-800">
      <div className="flex items-center space-x-2">
        {/* User ava */}
        <div className="flex flex-shrink-0 self-start cursor-pointer">
          <img className="h-9 w-9 object-fill rounded-full" src={ !user['picture'] ? default_avatar : apiClientRoutes.getPathAvatar(user['picture'])} alt="" />
        </div>

        <div className="flex items-center justify-center w-full space-x-3">
          <div className="block w-full">
            <div className="bg-gray-100 w-full rounded px-2 pb-2 dark:bg-dark-bg-800">
              <div className="flex w-full text-sm font-semibold">
                <span className="font-bold pt-2 dark:text-dark-text-300">{!user['first_name'] ? user.login : `${user['first_name']} ${user['second_name']}`}</span>
                <span className="font-normal pl-1 pt-2 dark:text-dark-text-400"> • {datePublish}</span>

                {
                  currentUser.id === data.user_id ? 
                  <div className="flex pt-1.5">
                    {
                      show ? (
                        <div className="flex">
                          <button onClick={handleChangeComment} className={`flex p-1.5 ml-2 transition-all duration-300 rounded-3xl text-gray-600 hover:bg-gray-200 dark:text-dark-text-400`}>
                            <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 23 23" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                          </button>
                          <button onClick={() => { setShow(!show), setContent(data.content) }} className={`flex p-1.5 mr-2 transition-all duration-300 rounded-3xl text-gray-400 hover:bg-gray-200 dark:text-dark-text-400`}>
                            <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 23 23" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg" >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      ) : (
                        <button onClick={() => setShow(!show)} className={`flex p-1.5 ml-2 transition-all duration-300 rounded-3xl text-gray-400 hover:bg-gray-200 dark:text-dark-text-400`}>
                          <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/>
                          </svg>
                        </button>
                      )
                    }
                    <button onClick={commentDeleteButtonHandle} className="w-6 h-6">
                      <svg aria-hidden="true" id={data.id + "-delete-button"} className="redeem-button w-5 h-5 text-gray-500 hover:rounded-full dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"></path>
                      </svg>
                    </button>
                  </div> : <></>
                }
              </div>
              {
                show ? (
                  <textarea onChange={(e) => setContent(e.target.value)} value={content} className="h-40 px-3 text-sm py-1 mt-5 outline-none border-gray-300 w-full resize-none border rounded-lg placeholder:text-sm dark:text-gray-400" placeholder="Add your comments here" />
                ) : ( 
                  <p className="text-md text-gray-600 dark:text-gray-400">{currentContent}</p>
                )
              }
              <div className="flex items-end justify-between">
                { reaction.isLoading ? <></> : <ReactionComment commentId={data.id} data={reaction.reaction} currentUser={currentUser}/> }
                <p className='font-normal text-sm font-semibold pl-1 pt-2'>{!!data.is_change ? 'changed' : ''}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
};

export default Comment