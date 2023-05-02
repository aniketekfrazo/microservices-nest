import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail, IsNotEmpty } from 'class-validator';


export type NonPayableDocument = NonPayable & Document;

@Schema({collection:'NonPayable'})
export class NonPayable {
 
  @Prop({ required: true })
  name: string;

  @Prop({ required:true,unique: true})
  code: number;

  @Prop({ default: false })
  isDisable: boolean;

//   @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Owner' })
// owner: Owner;
// @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Owner' }] })
// owner: Owner[];
}


export const NonPayableSchema = SchemaFactory.createForClass(NonPayable);



// import { Prop, Schema, SchemaFactory, } from '@nestjs/mongoose';
//     import { Document  } from 'mongoose';
        
//     class Name {
//       @Prop()
//       firstName: string;
    
//       @Prop()
//       lastName: string;
//     }
    
//     @Schema()
//     class User extends Document {
//       @Prop({ type: Name })
//       name: Name;
//     }
//     export const userSchema = SchemaFactory.createForClass(user);