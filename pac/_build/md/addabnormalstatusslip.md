# addAbnormalStatusSlip

Sets **tumble** effect.

Cannassault heromode tumble uses this. Not triggered with miniboss or boss.

## Code Information

- **Name**: `addAbnormalStatusSlip`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 50 00`
- **Assembly Address in Memory** : `0x8916bd4`

## Parameters

- `(int *)handle_id` *(8 bytes)* : Unit handle, obtained from [getUnitHandle](./getunithandle.md).

## Example

Here is one example in hex:

```25 17 50 00 / 04 00 00 00 / 36 00 00 00```

Which is interpreted as:

```c
addAbnormalStatusSlip((int *)iVar54)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08916bd4(int origin_addr,undefined4 param_2)

{
  bool bVar1;
  int *piVar2;
  int iVar3;
  int iVar4;
  int iVar5;
  undefined uStack96;
  byte local_5f;
  undefined4 local_58;
  undefined4 local_30;
  undefined4 local_2c;
  undefined4 local_28;
  undefined4 local_24;
  int local_14 [5];
  
  piVar2 = (int *)Pac_Get_Param(param_2,0,1,4);
  if (*piVar2 != -1) {
    iVar3 = Find_Target_By_HandleID(*(undefined4 *)(origin_addr + 0x14),*piVar2,1);
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    if ((iVar3 != 0) && (iVar4 = (**(code **)(*(int *)(iVar3 + 4) + 0x34))(iVar3), iVar4 == 9)) {
      iVar4 = *(int *)(iVar3 + 0xa14);
      bVar1 = true;
                    // doppelganger check
      if ((*(int *)(iVar4 + 0x18c) == 0x13) &&
         (((iVar5 = SS_Controller::Is_The_CS_or_SS(iVar3,0xab), iVar5 != 0 &&
           (iVar5 = Get_SSCaller_1stparam(1), iVar5 != 0)) &&
          (iVar5 = Damage::Status::Is_Attacking_Or_Defending(iVar5,iVar3), iVar5 != 0)))) {
        bVar1 = false;
      }
                    // can be pdeer?
      if (((bVar1) &&
          ((iVar4 = FUN_088f7920(iVar4 + 0x1f0), iVar4 == 0 ||
           (iVar4 = SS_Controller::Is_The_CS_or_SS(iVar3,0x19), iVar4 == 0)))) &&
         (Command::CommandStatus_Index_Get(local_14,iVar3 + 0x170), local_14[0] != 6)) {
        local_30 = 0;
        local_2c = 0;
        local_28 = 0;
        local_24 = 0;
        Syscall::Kernel::Kernel_Memset(&uStack96,0,0x40);
        local_58 = 0xffffffff;
        local_5f = local_5f & 0xf6 | 9;
        Damage::Status::Apply_Status_Effect(0,iVar3 + 0x180,4,1,&uStack96,0);
      }
      else {
        Set_StatusChecked_Flag(iVar3,7);
      }
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

