# disableRetireBox

Disables retiring during the mission. Used in tutorial.

Please consider not using this.

## Code Information

- **Name**: `disableRetireBox`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 60 00`
- **Assembly Address in Memory** : `0x89200ec`

## Parameters

- `(bool)disable_retire` *(8 bytes)* : 1 blocks from opening the retire box. 0 allows to retire during the mission.

## Example

Here is one example in hex:

```25 16 60 00 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
disableRetireBox((int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089200ec(int param_1,undefined4 param_2)

{
  int *piVar1;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  func_0x08b550b0(*(undefined4 *)(*(int *)(*(int *)(param_1 + 0x10) + 0x2b8) + 0x4c),*piVar1 == 0);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

