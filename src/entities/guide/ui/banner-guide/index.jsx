import BannerSubVendor from 'src/entities/guide/ui/banner-subvendor';
import LanguageImages from 'src/shared/ui/languages/language-images';
import FullStarSvg from '@/assets/images/svg/full-star';
import {fetchBannerSubVendor} from "@/entities/guide/api";
import './style.css';

export default async function BannerGuide({id}) {

    const { profile, rating, locales} = await fetchBannerSubVendor(id)

    return (
        <BannerSubVendor name={profile?.name} avatar={profile.avatar}>
            <div className="rate_box">
                <FullStarSvg/>
                {rating.reviews ? <span>{rating.rating} ({rating.reviews})</span> : null}
            </div>
            <LanguageImages locales={locales}/>
        </BannerSubVendor>
    )
}
