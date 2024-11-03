# setBossNoDamage

Marks the boss as invincible or not. The damage amount is still displayed, but does not take actual damage.

## Code Information

- **Name**: `setBossNoDamage`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 21 0f 00`
- **Assembly Address in Memory** : `0x89b1a7c`

## Parameters

- `(int)unique_id` *(8 bytes)* : ID from [setReqActorUniqueId](./setreqactoruniqueid.md). Usually it is 100 (0x64) in 1v1 DLC bosses.
- `(bool)is_invincible` *(8 bytes)* : 0 boss takes damage, 1 makes boss invincible.

## Example

Here is one example in hex:

```25 21 0f 00 / 02 00 00 00 / 64 00 00 00 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
setBossNoDamage((int)100, (int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089b1a7c(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = *(int *)(param_1 + 0x10);
  if (iVar3 == 0) {
    iVar3 = 0;
  }
  else {
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    iVar3 = Get_Squad_From_ReqUniqueID(*(undefined4 *)(iVar3 + 0xf8),*puVar1);
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    else {
      iVar3 = FUN_0896d6e0(*(undefined4 *)(iVar3 + 0x708));
      if (iVar3 == 0) {
        iVar3 = 0;
      }
    }
  }
  if (iVar3 != 0) {
    (**(code **)(*(int *)(iVar3 + 0xc) + 0x28))(iVar3,*piVar2 != 0);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

