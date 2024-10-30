# setModeEx

Please describe what this does.

## Code Information

- **Name**: `setModeEx`
- **Scope**: Mission
- **PAC Instruction (Binary)**: `25 1f 1b 00`
- **Assembly Address in Memory** : `0x8b5bf98`

## Parameters

- `(int *)generator_index` *(8 bytes)* : Generator Index, obtained from [create](./create.md).
- `(int)use_constgimmick` *(8 bytes)* : If this is 1, this occupies one *reqActor* slot (reqActor index starts from 1 instead of 0).
- `(int)Var2` *(8 bytes)* : If doubt, set it to -1.
- `(int)constgimmick_id` *(8 bytes)* : Const Gimmick to connect, from last parameter of [registConstGimmick](./registconstgimmick.md). Set -1 if there is none.

## Example

Here is one example in hex:

```25 1f 1b 00 / 08 00 00 00 / 1a 00 00 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / ff ff ff ff / 02 00 00 00 / ff ff ff ff```

Which is interpreted as:

```c
setModeEx(((global)int *)giVar26, (int)0, (int)-1, (int)-1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Mission__08b5bf98(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int *piVar3;
  int *piVar4;
  int iVar5;
  undefined4 uVar6;
  undefined4 uVar7;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  piVar3 = (int *)Pac_Get_Param(param_2,2,1,4);
  piVar4 = (int *)Pac_Get_Param(param_2,3,1,4);
  iVar5 = *(int *)(param_1 + 0x10);
  if (iVar5 == 0) {
    iVar5 = 0;
  }
  else {
    if (iVar5 == 0) {
      iVar5 = 0;
    }
    iVar5 = *(int *)(iVar5 + 0x2c8);
    if (iVar5 == 0) {
      iVar5 = 0;
    }
  }
  if (iVar5 != 0) {
    if (*piVar3 < 0) {
      iVar5 = Get_BaseAddr_From_Generator(iVar5,*puVar1);
      if (*piVar4 < 0) {
        FUN_Mission__08b56760(iVar5,*puVar2,0,0);
      }
      else {
        FUN_Mission__08b56760(iVar5,*puVar2,0);
        if (*piVar3 == -1) {
          *(undefined *)(iVar5 + 0x26) = 1;
        }
      }
    }
    else {
      uVar6 = FUN_Mission__08b5ac20(iVar5, *piVar3);
      uVar6 = Get_BaseAddr_From_Generator(iVar5,uVar6);
      uVar7 = Get_BaseAddr_From_Generator(iVar5,*puVar1);
      uVar6 = FUN_Mission__08b58d60(uVar6,(int)*(char *)piVar4);
      FUN_Mission__08b56760(uVar7,*puVar2,uVar6,0);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

