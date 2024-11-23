import connectDb from "@/lib/connectDb";
import { RequestssModel } from "@/lib/Models/RequestModel";

export async function POST(req) {
  await connectDb();
  try {
    const obj = await req.json();
    console.log("obj=>>" , obj)
    const isUserRequestedBefore = await RequestssModel.findOne({

      email: obj.email,
    });
    console.log("IsUser=>>" , isUserRequestedBefore)
    if (isUserRequestedBefore) {
      return Response.json(
        {

          error: true,
          msg: "You had  Already Requested as a doctor",
        },
        { status: 403 }
      );

    }
    let newRequest = await new RequestssModel({ ...obj })
    newRequest = await newRequest.save();
    return Response.json({

      error: false,
      msg: "request Rigistered sucsessfully",
      request: newRequest,
    }, { status: 201 })

  }
  catch (e) {
    return Response.json({
      error: true,
      msg: "Something went wrong",
    }, { status: 400 })

  }

}


export async function GET(req) {
  await connectDb();
  const requests = await RequestssModel.find();
  return Response.json({
    error: false,
    msg: "requests Fetched sucsessfully",
    requests,
  }, { status: 200 });


}



export async function PUT(req) { }



export async function DELETE(req) { }