import React from "react";
import { Star } from "lucide-react";
import M1 from "../../assets/images/member_8.jpg";

export default function Reviews() {
  return (
    <>
      <div className="content">
     
          <div className="reviews">
            <div className="row">
              <div className="col-md-5">
                <h3 className="rts">Rating</h3>
                <div className=" rate-list ">
                  <div className="rating d-flex justify-content-around ">
                    <div className="rating-num ">5.0</div>
                    <div className="rate-count d-flex flex-column align-items-center justify-content-center">
                      <div className="rating-stars d-flex ">
                        <div className="star1">
                          <Star />
                        </div>
                        <div className="star2">
                          <Star />
                        </div>
                        <div className="star3">
                          <Star />
                        </div>
                        <div className="star4">
                          <Star />
                        </div>
                        <div className="star5">
                          <Star />
                        </div>
                      </div>
                      <div
                        className="rating-count"
                        style={{ color: "var(--color2)" }}
                      >
                        (80 reviews)
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              
              <div className="col-md-7">
                <h3 className="customer">
                  Customer Reviews <span>(1)</span>
                </h3>
                <div className="client pt-4 d-flex justify-content-between align-items-center">
                  <div className="client-img d-flex align-items-center ">
                    <img src={M1} alt="" />
                  <div className="client-name  ms-3 ">Martin Williams
                  <div className="posted-date ">
                  September 9, 2022
                  </div>
                  </div>
                  </div>

                  <div className="client-stars d-flex ">
                    <div className="star1">
                      <Star />
                    </div>
                    <div className="star2">
                      <Star />
                    </div>
                    <div className="star3">
                      <Star />
                    </div>
                    <div className="star4">
                      <Star />
                    </div>
                    <div className="star5">
                      <Star />
                    </div>
                  </div>
                </div>
                <div className="client-review mt-5">
                  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                </div>
     
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
}
