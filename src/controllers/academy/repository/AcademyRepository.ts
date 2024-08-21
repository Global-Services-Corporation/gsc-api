import { Academy } from "@prisma/client";
import { NullInformation } from '../../../error/globalError';
import { BadRequest } from '../../../error/globalError';
import { EmailNull } from '../../../error/globalError';

export interface AcademyRepository {
    save( 
        fullName: string,
        phone: string,
        email: string,
        bornDate: Date
        ): Promise<Academy | BadRequest>;
    list(): Promise<Academy[] | NullInformation>;
    getbyId(id: string): Promise<Academy | NullInformation>;
    getByEmail(email: string): Promise< Academy | EmailNull>;
    getFullName(fullName: string): Promise<Academy | NullInformation>;
}