import { DomainConfigInterface } from '@root/core/interfaces/domain-config.interface';
import { UserManagementService } from '@user/domain/services/user-management.service';

export const domainConfig: DomainConfigInterface = {
  validators: [],
  services: [UserManagementService],
};
