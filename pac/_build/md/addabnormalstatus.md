# addAbnormalStatus

Sets status effect as **status ID**.

Check [status ID table](./guide/reference-table.md#as-non-flag) for the status effect.

## Code Information

- **Name**: `addAbnormalStatus`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 4f 00`
- **Assembly Address in Memory** : `0x8916778`

## Parameters

- `(int *)handle_id` *(8 bytes)* : Unit or squad handle, obtained from [getUnitHandle](./getunithandle.md) or [getSquadHandle](./getsquadhandle.md).
  - If the handle is squad, this is applied to the whole squad.
- `(int)status_ID` *(8 bytes)* : The [status effedt ID](./guide/reference-table.md#as-non-flag) to apply to the unit.
- `(float)duration` *(8 bytes)* : Duration of the status as *seconds*.
- `(bool)is_apply_effect` *(8 bytes)* : If this is zero, applies actual status effect to the unit. Otherwise, set status flag only.

## Remarks

- **For tumble, use [addAbnormalStatusSlip](./addabnormalstatusslip.md)** instead!
- **For knockback, use [addAbnormalStatusBlowOff](./addabnormalstatusblowoff.md)** instead!

## Example

Here is one example in hex:

```25 17 4f 00 / 04 00 00 00 / 19 00 00 00 / 02 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 20 41 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
addAbnormalStatus((int *)iVar25, (int)0, (float)10, (int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08916778(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  int *piVar4;
  int iVar5;
  int iVar6;
  undefined uStack64;
  byte local_3f;
  undefined4 local_38;
  undefined4 local_10;
  undefined4 local_c;
  undefined4 local_8;
  undefined4 local_4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  piVar4 = (int *)Pac_Get_Param(param_2,3,1,4);
  if (*piVar1 != -1) {
    iVar5 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*piVar1,1);
    if (iVar5 == 0) {
      iVar5 = 0;
    }
    if (iVar5 != 0) {
      iVar6 = (**(code **)(*(int *)(iVar5 + 4) + 0x34))(iVar5);
      if (iVar6 == 9) {
        iVar5 = iVar5 + 0x180;
        local_10 = 0;
        local_c = 0;
        local_8 = 0;
        local_4 = 0;
        Syscall::Kernel::Kernel_Memset(&uStack64,0,0x40);
        local_38 = 0xffffffff;
        local_3f = local_3f & 0xf6 | 9;
        switch(*puVar2) {
        case 0:
          Damage::Status::Apply_Status_Effect(*puVar3,iVar5,0,1,&uStack64,*piVar4 != 0);
          break;
        case 1:
          Damage::Status::Apply_Status_Effect(*puVar3,iVar5,1,1,&uStack64,*piVar4 != 0);
          break;
        case 2:
          Damage::Status::Apply_Status_Effect(*puVar3,iVar5,2,1,&uStack64,*piVar4 != 0);
          break;
        case 3:
          Damage::Status::Apply_Status_Effect(*puVar3,iVar5,3,1,&uStack64,*piVar4 != 0);
          break;
        case 4:
          Damage::Status::Apply_Status_Effect(*puVar3,iVar5,4,1,&uStack64,*piVar4 != 0);
          break;
        case 6:
          Damage::Status::Apply_Status_Effect(*puVar3,iVar5,6,1,&uStack64,*piVar4 != 0);
        }
      }
      else {
        iVar6 = (**(code **)(*(int *)(iVar5 + 4) + 0x34))(iVar5);
        if (iVar6 == 3) {
          switch(*puVar2) {
          case 0:
            FUN_088c6cdc(*puVar3,iVar5,0,*piVar4 != 0);
            break;
          case 1:
            FUN_088c6cdc(*puVar3,iVar5,1,*piVar4 != 0);
            break;
          case 2:
            FUN_088c6cdc(*puVar3,iVar5,2,*piVar4 != 0);
            break;
          case 3:
            FUN_088c6cdc(*puVar3,iVar5,3,*piVar4 != 0);
            break;
          case 4:
            FUN_088c6cdc(*puVar3,iVar5,4,*piVar4 != 0);
            break;
          case 6:
            FUN_088c6cdc(*puVar3,iVar5,6,*piVar4 != 0);
          }
        }
        else {
          iVar6 = (**(code **)(*(int *)(iVar5 + 4) + 0x34))(iVar5);
          if (iVar6 == 2) {
            switch(*puVar2) {
            case 0:
              FUN_088e361c(*puVar3,iVar5,0,*piVar4 != 0);
              break;
            case 1:
              FUN_088e361c(*puVar3,iVar5,1,*piVar4 != 0);
              break;
            case 2:
              FUN_088e361c(*puVar3,iVar5,2,*piVar4 != 0);
              break;
            case 3:
              FUN_088e361c(*puVar3,iVar5,3,*piVar4 != 0);
              break;
            case 4:
              FUN_088e361c(*puVar3,iVar5,4,*piVar4 != 0);
              break;
            case 6:
              FUN_088e361c(*puVar3,iVar5,6,*piVar4 != 0);
            }
          }
        }
      }
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

