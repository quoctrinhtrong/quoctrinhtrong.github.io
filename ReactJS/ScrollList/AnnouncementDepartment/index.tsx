import * as React from 'react';
import { Home, AuthStore } from '../../../stores';
import { observer } from 'mobx-react';
import * as HrvComponents from '@haravan/react-components';
import { IListAnnouncement } from '../../../models/Home';
import { HrRepository } from '../../../repositories/Hr/HrRepository';
import { Utils } from '../../../services'
import { ISVGEmptyList } from '../IconSVG';
import './index.css';

interface IAnnouncementDepartmentProps {

}

interface IAnnouncementDepartmentStates {

}

export class AnnouncementDepartment extends React.Component<IAnnouncementDepartmentProps, IAnnouncementDepartmentStates> {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    private ref_listItem: HTMLElement;
    private currentPage = 1;

    componentDidMount() {
        this.getListAnnouncementDepartment();
        this.listenScroll();
    }

    componentWillUnmount() {
        this.removeListen()
    }

    private listenScroll = () => {
        if (this.ref_listItem) this.ref_listItem.addEventListener('scroll', this.onScrollLoadmore);
    }

    private removeListen = () => {
        if (this.ref_listItem) this.ref_listItem.removeEventListener('scroll', this.onScrollLoadmore);
    }

    componentDidUpdate() {
        this.removeListen();
        this.listenScroll();
    }

    private getListAnnouncementDepartment = () => {
        Home.getAnnoucementsDepartment(this.currentPage, () => this.onSetState())
    }

    private onSetState = () => {
        //if (this.ref_listItem) this.ref_listItem.addEventListener('scroll', this.onScrollLoadmore);
    }

    private onScrollLoadmore = (e) => {
        let scrollTop = e.srcElement.scrollTop,
            scrollHeight = e.srcElement.scrollHeight,
            offsetHeight = e.srcElement.offsetHeight;

        if (scrollTop + offsetHeight >= scrollHeight - 50 && !Home.loadingAnnoucements && !Home.loadingMoreAnnoucements) {
            if (Home.totalCountAnnoucements === Home.listAnnoucements.length) return;

            this.currentPage += 1
            Home.getAnnoucementsDepartment(this.currentPage, () => this.onSetState())
        }
    }


    private renderHeader = () => {
        return <div className='feedback-section-header'>
            <div className=''>
                <div className='ui-card-section-header-heading-title'>Thông báo từ phòng ban</div>
            </div>
        </div>
    }

    private renderItem = (item: IListAnnouncement) => {
        return (
            <div className='announcement-item'>
                <div className='announcement-item__left'>
                    <p className='announcement-item__name--long  mb-1' style={{ fontWeight: item.isReaded ? 400 : 'bold' }}>{item.name}</p>
                    <div className='announcement-item__header'>
                        <div className='announcement-item--content-title text-truncate'>
                            <HrvComponents.CardProfile type='User' id={item.createdBy} callApiUser={() => HrRepository.getApiUserDetail} callBackData={(data) => this.setState({ user: data })} />
                        </div>
                        <span className='ml-2 mr-2 announcement-item--content-datetime'>|</span>
                        <div className='announcement-item--content-datetime'>
                            {Utils.getTimeMoment(item.updatedAt)}
                        </div>
                        <span className='ml-2 mr-2 announcement-item--content-datetime'>|</span>
                        <div className='announcement-item--content-datetime'>{`${item.readCount ? item.readCount : 0} đã đọc`}</div>
                    </div>
                </div>
                <div className='announcement-item__right'>
                    <HrvComponents.Badges status='primary' className='announcement-item--content-badges'><div className='max-width-100px text-truncate'>{item.fromDepartmentName}</div></HrvComponents.Badges>
                </div>
            </div>
        )
    }

    private renderEmpty = () => {
        return <div className='announcement-list-empty-container'>
            <div className='mr-2'>
                <ISVGEmptyList />
            </div>
            <p>Không có thông báo mới</p>
        </div>
    }

    private renderEmptyAnnouncement = () => {
        return <div className='announcement-empty-container'>
            <div className='mr-2'>
                <ISVGEmptyList />
            </div>
            <p>Đã hết thông báo từ phòng ban</p>
        </div>
    }

    private renderBody = () => {
        const listAnnoucements = [...Home.listAnnoucements];
        return <div className='ui-card-section-body'>
            {listAnnoucements && listAnnoucements.length > 0
                ? (
                    <div className='announcement__wrapper' ref={el => this.ref_listItem = el}>
                        {listAnnoucements.map((item, index) => {
                            return <a className='announcement__wrapper-link-none' key={index} href={AuthStore.im_client + '/announcements/list/all/detail/' + item.id} target='_blank'>
                                {this.renderItem(item)}
                            </a>
                        })}
                        {listAnnoucements.length < 4 && this.renderEmptyAnnouncement()}
                        {Home.loadingMoreAnnoucements && <div className='employee-birthday-item'>
                            <HrvComponents.Loading size='pico' />
                        </div>}
                    </div>
                )
                : this.renderEmpty()
            }
            <div className='announcement-footer'>
                <a className='maintenance_create text-color-2979FF' target='_blank' href={AuthStore.im_client + '/announcements/list/all'}>Xem danh sách</a>
            </div>
        </div>
    }

    private renderLoading = () => {
        const listItem = [];
        for (let i = 0; i < 4; i++) {
            const key = 'hrv-loading-item-' + i;
            listItem.push(<div key={key} className='ui-card-section-body--item'>
                <div className='hrv-stack hrv-stack--align-center'>
                    <div className='hrv-stack--item hrv-stack--item-fill'>
                        <HrvComponents.SkeletonBodyText lines={2} />
                    </div>
                </div>
            </div>);
        }

        return <div className='home-section min-height-360px'>
            <div className='ui-card-section-header-loading'>
                <div className='hrv-stack hrv-stack--align-center'>
                    <div className='hrv-stack--item'>
                        <div className='ui-card-section-header-heading-loading'><HrvComponents.SkeletonDisplayText /></div>
                    </div>
                </div>
            </div>
            <div className='ui-card-section-body'>
                <div className='ui-card-section-body--list'>{listItem}</div>
                <div className='ui-card-section-body--link'>
                    <div className='ui-card-section-header-link-loading'><HrvComponents.SkeletonDisplayText /></div>
                </div>
            </div>
        </div>
    }

    render() {
        let loadingAnnoucements = Home.loadingAnnoucements;
        if (loadingAnnoucements) return this.renderLoading();
        return <div className='home-section announcement-container'>
            {this.renderHeader()}
            {this.renderBody()}
        </div>
    }
}

observer(AnnouncementDepartment)