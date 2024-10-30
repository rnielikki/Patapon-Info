# isSummonMode

Checks whose summon is going on in whose side.

## Code Information

- **Name**: `isSummonMode`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0c 17 00`
- **Assembly Address in Memory** : `0x8970e20`

## Parameters

- `(int)team` *(8 bytes)* : 0 is blue team, 1 is red team.
- `(int *)destination` *(8 bytes)* : Variable *to store* the result.
  - 0 is no summon, 1 is own summon for the team, 2 is enemy summon for the team

## Example

Here is one example in hex:

```25 0c 17 00 / 02 00 00 00 / 00 00 00 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
isSummonMode((int)0, (int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08970e20(int param_1,undefined4 param_2)

{
  bool bVar1;
  int *piVar2;
  undefined4 *puVar3;
  undefined4 uVar4;
  int iVar5;
  
  piVar2 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  iVar5 = *(int *)(*(int *)(param_1 + 0x10) + 0x158);
  *puVar3 = 0;
  if (iVar5 != 0) {
    bVar1 = false;
    if ((*piVar2 == 1) && (*(int *)(iVar5 + 0x3eb4) != 0)) {
      bVar1 = true;
    }
    if (*(char *)(*piVar2 + iVar5 + 0x3f06) == '\0') {
      if (bVar1) {
        uVar4 = 2;
      }
      else {
        uVar4 = 0;
      }
    }
    else {
      uVar4 = 1;
    }
    *puVar3 = uVar4;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

